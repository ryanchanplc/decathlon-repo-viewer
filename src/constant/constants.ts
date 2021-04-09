export const ActionTypes = {
  SET_PROFILE_LOADING: ' SET_PROFILE_LOADING',
  SET_REPO_LOADING: ' SET_REPO_LOADING',
  SET_ERROR: ' SET_ERROR',
  SET_PROFILE: 'SET_PROFILE',
  SET_REPOS: 'SET_REPOS',
  SET_QUERY: 'SET_QUERY',
};
export const FORKS: Record<string, string> = {
  all: 'All',
  '<50': '< 50',
  '50..100': '50 - 100',
  '>100': '> 100',
};
export const STARS: Record<string, string> = {
  all: 'All',
  '<10': '< 10',
  '10..50': '10 - 50',
  '>50': '> 50',
};
export const PER_PAGE = {
  '10': '10',
  '25': '25',
  '50': '50',
};
export const SORT = {
  bestmatch: 'Bestmatch',
  stars: 'Stars',
  forks: 'Forks',
  'help-wanted-issue': 'Issues',
  updated: 'Updated',
};

export const ORDER = {
  asc: 'ASC',
  desc: 'DESC',
};
