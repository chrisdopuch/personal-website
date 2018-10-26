import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createMuiTheme,
  createStyles,
  MuiThemeProvider,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ResponsiveDrawer from './ResponsiveDrawer';

const stylesDeclarations = (_theme: Theme) => {
  return createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'center',
    },
  });
};

const appTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

interface IAppProps extends WithStyles<typeof stylesDeclarations> {
  title: string;
  theme: Theme;
}

class App extends React.Component<IAppProps> {
  public static defaultProps = {
    theme: appTheme,
  };

  public render() {
    const { classes, title, theme } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Router>
            <div className={classes.root}>
              <ResponsiveDrawer title={title} />
            </div>
          </Router>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default withStyles(stylesDeclarations, { withTheme: true })(App);
