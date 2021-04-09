import axios, { AxiosError } from 'axios';
import { QueryParams } from '../types/AppState';
import { ActionTypes } from '../constant/constants';
import {
  REPO_ENDPOINT,
  BASE_URL,
  USER,
  PROFILE_ENDPOINT,
} from '../constant/api';

interface HeaderType {
  headers: {
    Accept: string;
    Authorization?: string;
  };
}
const getHeader = (): HeaderType => {
  const headers: HeaderType = {
    headers: {
      Accept: 'application/vnd.github.mercy-preview+json',
    },
  };

  if (process.env.REACT_APP_API_TOKEN)
    headers.headers.Authorization = `token ${process.env.REACT_APP_API_TOKEN}`;
  return headers;
};

const headers = getHeader();

export const setProfileLoading = (
  dispatch: React.Dispatch<any>,
  status: boolean
): void => dispatch({ type: ActionTypes.SET_PROFILE_LOADING, payload: status });

export const setRepoLoading = (
  dispatch: React.Dispatch<any>,
  status: boolean
): void => dispatch({ type: ActionTypes.SET_REPO_LOADING, payload: status });

export const clearError = (dispatch: React.Dispatch<any>): void =>
  dispatch({
    type: ActionTypes.SET_ERROR,
    payload: null,
  });

export const setError = (
  dispatch: React.Dispatch<any>,
  error: AxiosError
): void =>
  dispatch({
    type: ActionTypes.SET_ERROR,
    payload: {
      status: error.response?.status,
      message: error.message,
      body: error.response?.data?.message,
    },
  });

export const getProfile = (dispatch: React.Dispatch<any>): void => {
  setProfileLoading(dispatch, true);
  axios
    .get(`${BASE_URL}${PROFILE_ENDPOINT}/${USER}`, headers)
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
      `${BASE_URL}${REPO_ENDPOINT}?q=${q}&per_page=${perPage}&page=${page}&sort=${sort}&order=${order}`,
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
