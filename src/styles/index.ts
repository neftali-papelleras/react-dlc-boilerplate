import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#ED008C',
      dark: '#A56889',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#A56889',
      dark: '#ba000d',
      contrastText: '#000',
    },
    text: {
      primary: '#A56889',
    },
  },
  shape: {
    borderRadius: 2,
  },
});

export default theme;
