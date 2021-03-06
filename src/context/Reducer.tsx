import { ActionTypes } from '../constant/constants';
import AppState from '../types/AppState';
import ActionType from '../types/ActionType';

export default (state: AppState, action: ActionType): any => {
  switch (action.type) {
    case ActionTypes.SET_PROFILE:
      return { ...state, profile: action.payload, isProfileLoading: false };
    case ActionTypes.SET_REPOS:
      return {
        ...state,
        repos: {
          ...state.repos,
          total_count: action.payload.total_count,
          items: action.payload.items,
        },
        isRepoLoading: false,
      };

    case ActionTypes.SET_PROFILE_LOADING:
      return { ...state, isProfileLoading: action.payload };
    case ActionTypes.SET_REPO_LOADING:
      return { ...state, isRepoLoading: action.payload };
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isRepoLoading: false,
        isProfileLoading: false,
      };
    case ActionTypes.SET_QUERY:
      return {
        ...state,
        queryParams: { ...state.queryParams, ...action.payload },
      };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
