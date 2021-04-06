import { createContext } from 'react';
import ProfileType from '../types/ProfileType';
import RepoType from '../types/RepoType';

export interface Error {
  status: any;
  message: string;
}
export const SortTypes = {
  ASC: 'A-Z',
  DESC: 'Z-A',
  LATEST: 'Latest',
  OLDEST: 'Oldest',
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
export interface SearchState {
  keywords: string;
  type: string;
  topic: string;
  language: string;
  sort: SortState;
}
export type SortState =
  | typeof SortTypes.ASC
  | typeof SortTypes.DESC
  | typeof SortTypes.LATEST
  | typeof SortTypes.OLDEST;
export interface AppState {
  search: SearchState;
  languageList: Array<OptionsState>;
  typeList: Array<OptionsState>;
  topicList: Array<OptionsState>;
  profile: ProfileType | null;
  repoList: Array<RepoType>;
  filteredRepoList: Array<RepoType>;
  loading: boolean;
  error: Error | null;
}
export const initialState: AppState = {
  search: {
    keywords: '',
    type: 'All',
    topic: 'All',
    language: 'All',
    sort: SortTypes.ASC,
  },
  languageList: [],
  typeList: [],
  topicList: [],
  profile: null,
  repoList: [],
  filteredRepoList: [],
  loading: false,
  error: null,
};

export const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});
