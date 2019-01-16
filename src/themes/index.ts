import { createMuiTheme } from '@material-ui/core';

export const appTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

export const darkTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      label: {
        color: 'white',
      },
    },
  },
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#004d40',
    },
    type: 'dark',
  },
  typography: {
    useNextVariants: true,
  },
});
