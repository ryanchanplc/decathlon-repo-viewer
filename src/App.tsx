import { ThemeProvider } from '@material-ui/core';
import theme from './utils/theme';
import HomePage from './pages/HomePage/HomePage';

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <HomePage />
  </ThemeProvider>
);

export default App;
