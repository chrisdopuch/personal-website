import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, MuiThemeProvider, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import CameraIcon from '@material-ui/icons/Camera';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import { useStore } from 'react-hookstore';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IAppStore } from '../store';
import { appTheme, darkTheme } from '../themes';
import NavDrawer from './NavDrawer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import TitleBar from './TitleBar';

const navBarItems = [
  { to: '/', label: 'Home', Icon: HomeIcon, isRouteExact: true, page: Home },
  { to: '/about', label: 'About me', Icon: HelpIcon, isRouteExact: false, page: About },
  { to: '/gallery', label: 'Gallery', Icon: CameraIcon, isRouteExact: false, page: Gallery },
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

interface IAppProps extends WithStyles<typeof stylesDeclarations, true> {
  title: string;
}

export const App: React.SFC<IAppProps> = (props) => {
  const { classes, title } = props;
  const [appStore, _setStore]: [IAppStore, (s: IAppStore) => void] = useStore('appStore');

  return (
    <MuiThemeProvider theme={appStore.isDarkMode ? darkTheme : appTheme}>
      <CssBaseline />
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
  );
};

export default withStyles(stylesDeclarations, { withTheme: true })(App);
