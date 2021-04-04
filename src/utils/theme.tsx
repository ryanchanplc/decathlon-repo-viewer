import { createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[500],
    },
    secondary: {
      main: teal[500],
    },
  },
});

export default theme;
