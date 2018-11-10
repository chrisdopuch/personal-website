import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createMuiTheme,
  createStyles,
  MuiThemeProvider,
  Theme,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CameraIcon from '@material-ui/icons/Camera';
import CodeIcon from '@material-ui/icons/Code';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NavDrawer from './NavDrawer';
import About from './pages/About';
import Home from './pages/Home';
import TitleBar from './TitleBar';

const Projects = () => (
  <Typography variant="h2" component="h3">
    Projects
  </Typography>
);

const Gallery = () => (
  <Typography variant="h2" component="h3">
    Gallery
  </Typography>
);

const navBarItems = [
  { to: '/', label: 'Home', Icon: HomeIcon, isRouteExact: true, page: Home },
  { to: '/about', label: 'About me', Icon: HelpIcon, isRouteExact: false, page: About },
  { to: '/gallery', label: 'Gallery', Icon: CameraIcon, isRouteExact: false, page: Gallery },
  { to: '/projects', label: 'Projects', Icon: CodeIcon, isRouteExact: false, page: Projects },
];

const stylesDeclarations = (theme: Theme) => {
  return createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
    },
    root: {
      display: 'flex',
      flexGrow: 1,
      textAlign: 'center',
    },
    toolbar: theme.mixins.toolbar,
  });
};

export const appTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

interface IAppProps extends WithStyles<typeof stylesDeclarations, true> {
  title: string;
}

export class App extends React.Component<IAppProps> {
  public render() {
    const { classes, title, theme } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Router>
            <div className={classes.root}>
              <TitleBar title={title} />
              <NavDrawer items={navBarItems} />
              <main className={classes.content}>
                <div className={classes.toolbar} />
                {navBarItems.map(({ to, page, isRouteExact }) => {
                  return <Route path={to} component={page} exact={isRouteExact} key={to} />;
                })}
              </main>
            </div>
          </Router>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default withStyles(stylesDeclarations, { withTheme: true })(App);
