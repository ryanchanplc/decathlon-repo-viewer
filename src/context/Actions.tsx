import axios, { AxiosError } from 'axios';
import RepoType from '../types/RepoType';

import {
  SearchState,
  Types,
  OptionsState,
  SortState,
  SortTypes,
} from './AppContext';

const headers = {
  headers: {
    Accept: 'application/vnd.github.mercy-preview+json',
  },
};
export const ActionTypes = {
  SET_LANG: 'SET_LANG',
  SET_TOPIC: 'SET_TOPIC',
  SET_TYPE: 'SET_TYPE',
  SEARCH: 'SEARCH',
  SORT: 'SORT',
  SET_LOADING: ' SET_LOADING',
  SET_ERROR: ' SET_ERROR',
  SET_PROFILE: 'SET_PROFILE',
  SET_REPOS: 'SET_REPOS',
  SET_FILTERED_REPOS: ' SET_FILTERED_REPOS',
};

export const setLoading = (
  dispatch: React.Dispatch<any>,
  status: boolean
): void => dispatch({ type: ActionTypes.SET_LOADING, payload: status });

export const setError = (
  dispatch: React.Dispatch<any>,
  error: AxiosError
): void =>
  dispatch({
    type: ActionTypes.SET_ERROR,
    payload: { error: error.response?.status, message: error.message },
  });
export const setLanguagesFilter = (
  dispatch: React.Dispatch<any>,
  data: Array<RepoType>
): void => {
  const languages = data
    ?.filter((element: RepoType) => element.language)
    .map((element: RepoType) => element.language);

  const languageOptions = Array.from(new Set(languages)).map(
    (element?: string) => ({
      id: element && element,
      label: element && element,
    })
  );
  dispatch({
    type: ActionTypes.SET_LANG,
    payload: [{ id: 'All', label: 'All' }, ...languageOptions],
  });
};

export const setTopicsFilter = (
  dispatch: React.Dispatch<any>,
  data: Array<RepoType>
): void => {
  const topics: Array<OptionsState> = data
    ?.filter((element: RepoType) => element.topics)
    .map((element: RepoType) => element.topics)
    .flat()
    .map((str: any) => ({
      id: str,
      label: str,
    }));

  dispatch({
    type: ActionTypes.SET_TOPIC,
    payload: [{ id: 'All', label: 'All' }, ...Array.from(new Set(topics))],
  });
};

export const getProfile = (dispatch: React.Dispatch<any>): void => {
  setLoading(dispatch, true);
  axios
    .get(`https://api.github.com/orgs/Decathlon`, headers)
    .then((res) => res.data)
    .then((res) => {
      dispatch({
        type: ActionTypes.SET_PROFILE,
        payload: res,
      });
    })
    .catch((error: AxiosError) => {
      setError(dispatch, error);
    });
};

export const getRepos = (dispatch: React.Dispatch<any>): void => {
  setLoading(dispatch, true);
  axios
    .get(`https://api.github.com/orgs/Decathlon/repos`, headers)
    .then((res) => res.data)
    .then((res) => {
      setLanguagesFilter(dispatch, res);
      setTopicsFilter(dispatch, res);
      dispatch({
        type: ActionTypes.SET_REPOS,
        payload: res,
      });
      Sort(dispatch, SortTypes.ASC, res);
    })
    .catch((error: AxiosError) => {
      setError(dispatch, error);
    });
};
const filterType = (type: string, repo: RepoType) => {
  switch (type) {
    case Types.ALL:
      return true;
    case Types.ARCHIVED:
      return repo.archived === true;
    case Types.DISABLED:
      return repo.disabled === true;
    case Types.SOURCE:
      return repo.fork === false;
    case Types.FORKS:
      return repo.fork === true;
    case Types.PRIVATE:
      return repo.private === true;
    case Types.PUBLIC:
      return repo.private === false;

    default:
      return true;
  }
};

export const Search = (
  dispatch: React.Dispatch<any>,
  search: SearchState,
  repos: Array<RepoType>
): void => {
  const data = repos
    .filter((repo: RepoType) =>
      search.keywords !== 'All'
        ? repo.name?.toUpperCase().includes(search.keywords.toUpperCase())
        : true
    )
    .filter((repo: RepoType) =>
      search.language !== 'All' ? repo.language === search.language : true
    )
    .filter((repo: RepoType) =>
      search.topic !== 'All' ? repo.topics?.includes(search.topic) : true
    )
    .filter((repo: RepoType) => filterType(search.type, repo));

  dispatch({ type: ActionTypes.SEARCH, payload: { data, search } });
  Sort(dispatch, search.sort, data);
};
export const Sort = (
  dispatch: React.Dispatch<any>,
  sort: SortState,
  repos: Array<RepoType>
): void => {
  const data = repos.sort((a: RepoType, b: RepoType) => {
    console.log(sort);
    const nameA = a.name?.toUpperCase();
    const nameB = b.name?.toUpperCase();
    const timeA = a.updated_at?.toUpperCase();
    const timeB = b.updated_at?.toUpperCase();
    switch (sort) {
      case SortTypes.ASC:
      case SortTypes.DESC:
        if (nameA && nameB) {
          if (nameA < nameB) return sort === SortTypes.ASC ? -1 : 1;
          if (nameA > nameB) return sort === SortTypes.ASC ? 1 : -1;
        }
        return 0;
      case SortTypes.LATEST:
      case SortTypes.OLDEST:
        if (timeA && timeB) {
          if (timeA < timeB) return sort === SortTypes.OLDEST ? -1 : 1;
          if (timeA > timeB) return sort === SortTypes.OLDEST ? 1 : -1;
        }
        return 0;
      default:
        return 0;
    }
  });
  dispatch({ type: ActionTypes.SORT, payload: { data, sort } });
};
