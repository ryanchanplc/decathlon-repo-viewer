import { ThemeProvider } from '@material-ui/core';
import theme from './utils/theme';
import HomePage from './pages/HomePage/HomePage';
import AppContextProvider from './context/AppContextProvider';
import makeServer from './mock/server';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

const App = (): JSX.Element => (
  <AppContextProvider>
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  </AppContextProvider>
);

export default App;
