import LicenseType from './LicenseType';
import RepoType from './RepoType';
import ProfileType from './ProfileType';
import { ORDER, SORT } from '../constant/constants';
import Error from './ErrorType';

export interface OptionsState {
  id: string;
  label: string;
}

export interface QueryParams {
  keywords?: string;
  topic?: string;
  language?: string;
  license?: LicenseType;
  user?: string;
  sort?: SortState;
  page?: number;
  per_page?: string;
  order?: OrderState;
  forks?: string;
  stars?: string;
}
export type OrderState = typeof ORDER.asc | typeof ORDER.desc;
export type SortState =
  | typeof SORT.stars
  | typeof SORT.forks
  | typeof SORT['help-wanted-issue']
  | typeof SORT.updated
  | typeof SORT.bestmatch;

export interface RepoState {
  total_count: number;
  items: Array<RepoType>;
}
export default interface AppState {
  queryParams: QueryParams | null;
  profile: ProfileType | null;
  repos: RepoState | null;
  isProfileLoading: boolean;
  isRepoLoading: boolean;
  error: Error | null;
}
