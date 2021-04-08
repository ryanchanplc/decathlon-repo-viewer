import { createContext } from 'react';
import { PER_PAGE, SORT, ORDER } from '../constant/constants';
import AppState from '../types/AppState';

export const initialState: AppState = {
  queryParams: {
    user: 'decathlon',
    page: 1,
    per_page: Object.keys(PER_PAGE)[0],
    sort: Object.keys(SORT)[0],
    order: Object.keys(ORDER)[0],
    forks: 'all',
    stars: 'all',
  },
  profile: null,
  repos: null,
  isProfileLoading: false,
  isRepoLoading: false,
  error: null,
};

export const AppContext = createContext<any>({});
