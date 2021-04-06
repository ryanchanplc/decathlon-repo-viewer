import { useReducer } from 'react';
import { AppContext, initialState } from './AppContext';
import reducer from './Reducer';

const AppContextProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
