import { ActionTypes } from './Actions';
import { AppState, Action } from './AppContext';

export default (state: AppState, action: Action): any => {
  switch (action.type) {
    case ActionTypes.SET_LANG:
      return { ...state, languageList: action.payload };
    case ActionTypes.SET_TOPIC:
      return { ...state, topicList: action.payload };
    case ActionTypes.SET_TYPE:
      return { ...state, typeList: action.payload };
    case ActionTypes.SEARCH:
      return {
        ...state,
        filteredRepoList: action.payload.data,
        search: action.payload.search,
      };
    case ActionTypes.SET_PROFILE:
      return { ...state, profile: action.payload, loading: false };
    case ActionTypes.SET_REPOS:
      return {
        ...state,
        repoList: action.payload,
        filteredRepoList: action.payload,
        loading: false,
      };
    case ActionTypes.SORT:
      return {
        ...state,
        filteredRepoList: action.payload.data,
        sort: action.payload.sort,
      };
    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case ActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
