import { useReducer } from 'react';
import { AppContext, initialState } from './AppContext';
import AppState from '../types/AppState';
import reducer from './Reducer';

interface AppContextProviderProps {
  initial?: AppState;
}
const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
  initial = initialState,
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
