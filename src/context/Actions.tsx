import axios, { AxiosError } from 'axios';
import { QueryParams } from './AppContext';

const headers = {
  headers: {
    Accept: 'application/vnd.github.mercy-preview+json',
  },
};
export const ActionTypes = {
  SET_PROFILE_LOADING: ' SET_PROFILE_LOADING',
  SET_REPO_LOADING: ' SET_REPO_LOADING',
  SET_ERROR: ' SET_ERROR',
  SET_PROFILE: 'SET_PROFILE',
  SET_REPOS: 'SET_REPOS',
  SET_QUERY: 'SET_QUERY',
};

export const setProfileLoading = (
  dispatch: React.Dispatch<any>,
  status: boolean
): void => dispatch({ type: ActionTypes.SET_PROFILE_LOADING, payload: status });

export const setRepoLoading = (
  dispatch: React.Dispatch<any>,
  status: boolean
): void => dispatch({ type: ActionTypes.SET_REPO_LOADING, payload: status });

export const setError = (
  dispatch: React.Dispatch<any>,
  error: AxiosError
): void =>
  dispatch({
    type: ActionTypes.SET_ERROR,
    payload: { error: error.response?.status, message: error.message },
  });

export const getProfile = (dispatch: React.Dispatch<any>): void => {
  setProfileLoading(dispatch, true);
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

export const SetQueryParams = (
  dispatch: React.Dispatch<any>,
  queryParams: QueryParams
): void => {
  dispatch({ type: ActionTypes.SET_QUERY, payload: queryParams });
};

export const getRepos = (
  dispatch: React.Dispatch<any>,
  queryParams: QueryParams
): void => {
  setRepoLoading(dispatch, true);
  const esc = encodeURIComponent;
  // const query = Object.keys(queryParams)
  //   .map((k) => `${esc(k)}=${esc(queryParams[k])}`)
  //   .join('&');
  const {
    user,
    keywords,
    page,
    sort,
    order,
    per_page: perPage,
    license,
    language,
    topic,
    stars,
    forks,
  } = queryParams;
  let q = keywords ? `${esc(keywords)}` : ``;
  q += `+user:${esc(user!)}`;
  q += language ? `+language:${esc(language)}` : ``;
  q += topic ? `+topic:${esc(topic)}` : ``;
  q += license ? `+license:${esc(license.key)}` : ``;
  q += stars && stars !== 'all' ? `+stars:${esc(stars)}` : ``;
  q += forks && forks !== 'all' ? `+forks:${esc(forks)}` : ``;
  axios
    .get(
      `https://api.github.com/search/repositories?q=${q}&per_page=${perPage}&page=${page}&sort=${sort}&order=${order}`,
      headers
    )
    .then((res) => res.data)
    .then((res) => {
      dispatch({
        type: ActionTypes.SET_REPOS,
        payload: { items: res.items, total_count: res.total_count },
      });
    })
    .catch((error: AxiosError) => {
      setError(dispatch, error);
    });
};
