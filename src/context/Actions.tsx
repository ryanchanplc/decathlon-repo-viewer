import axios, { AxiosError } from 'axios';
import { QueryParams } from '../types/AppState';

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

const getQueryParams = (query: QueryParams) => {
  const { user, keywords, license, language, topic, stars, forks } = query;
  const esc = encodeURIComponent;
  let result = keywords ? `${esc(keywords)}` : ``;
  result += user && `+user:${esc(user)}`;
  result += language ? `+language:${esc(language)}` : ``;
  result += topic ? `+topic:${esc(topic)}` : ``;
  result += license ? `+license:${esc(license.key)}` : ``;
  result += stars && stars !== 'all' ? `+stars:${esc(stars)}` : ``;
  result += forks && forks !== 'all' ? `+forks:${esc(forks)}` : ``;
  return result;
};
export const getRepos = (
  dispatch: React.Dispatch<any>,
  queryParams: QueryParams
): void => {
  setRepoLoading(dispatch, true);

  const { page, sort, order, per_page: perPage } = queryParams;
  const q = getQueryParams(queryParams);
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
