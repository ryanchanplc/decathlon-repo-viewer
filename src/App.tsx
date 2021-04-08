import { ThemeProvider } from '@material-ui/core';
import { Suspense, lazy } from 'react';
import theme from './utils/theme';
// import HomePage from './pages/HomePage/HomePage';
import AppContextProvider from './context/AppContextProvider';
import makeServer from './mock/server';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

const HomePage = lazy(() => import('./pages/HomePage/HomePage')); // Lazy-loaded

const App = (): JSX.Element => (
  <Suspense fallback={<LoadingSpinner fullHeight />}>
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </AppContextProvider>
  </Suspense>
);

export default App;
