import { createContext } from 'react';
import ProfileType from '../types/ProfileType';
import RepoType, { LicenseType } from '../types/RepoType';

export interface Error {
  status: any;
  message: string;
}
export const forksTypes: Record<string, string> = {
  all: 'All',
  '<50': '< 50',
  '50..100': '50 - 100',
  '>100': '> 100',
};
export const starsTypes: Record<string, string> = {
  all: 'All',
  '<10': '< 10',
  '10..50': '10 - 50',
  '>50': '> 50',
};
export const perPageTypes = {
  '10': '10',
  '25': '25',
  '50': '50',
};
export const SortTypes = {
  bestmatch: 'Bestmatch',
  stars: 'Stars',
  forks: 'Forks',
  'help-wanted-issue': 'help-wanted-issues',
  updated: 'Updated',
};

export const OrderTypes = {
  asc: 'ASC',
  desc: 'DESC',
};
export const Types = {
  ALL: 'All',
  SOURCE: 'Source',
  FORKS: 'Forks',
  PUBLIC: 'Public',
  PRIVATE: 'Private',
  ARCHIVED: 'Archived',
  DISABLED: 'Disabled',
};
export interface Action {
  type: string;
  payload: any;
}
export interface OptionsState {
  id: string;
  label: string;
}

export interface QueryParams {
  keywords?: string;
  type?: string;
  topic?: string;
  language?: string;
  license?: LicenseType;
  user?: string;
  sort: SortState;
  page: number;
  per_page: string;
  order: OrderState;
  forks: string;
  stars: string;
}
export type OrderState = typeof OrderTypes.asc | typeof OrderTypes.desc;
export type SortState =
  | typeof SortTypes.stars
  | typeof SortTypes.forks
  | typeof SortTypes['help-wanted-issue']
  | typeof SortTypes.updated
  | typeof SortTypes.bestmatch;
export interface RepoState {
  total_count: number;
  items: Array<RepoType>;
}
export interface AppState {
  queryParams: QueryParams | null;
  profile: ProfileType | null;
  repos: RepoState | null;
  isProfileLoading: boolean;
  isRepoLoading: boolean;
  error: Error | null;
}
export const initialState: AppState = {
  queryParams: {
    user: 'decathlon',
    page: 1,
    per_page: Object.keys(perPageTypes)[0],
    sort: Object.keys(SortTypes)[0],
    order: Object.keys(OrderTypes)[0],
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
