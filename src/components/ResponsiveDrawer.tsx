import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CameraIcon from '@material-ui/icons/Camera';
import CodeIcon from '@material-ui/icons/Code';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import React, { ComponentType } from 'react';
import { Link, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const drawerWidth = 240;

const stylesDeclarations = (theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        flexShrink: 0,
        width: drawerWidth,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    menuButton: {
      marginRight: 20,
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
  });

interface IResponsiveDrawerState {
  mobileOpen: boolean;
}

interface IResponsiveDrawerProps extends WithStyles<typeof stylesDeclarations> {
  title: string;
  theme: Theme;
}

interface IRoute {
  to: string;
  label: string;
  Icon: ComponentType<SvgIconProps>;
}

const routes: IRoute[] = [
  { to: '/', label: 'Home', Icon: HomeIcon },
  { to: '/about', label: 'About me', Icon: HelpIcon },
  { to: '/gallery', label: 'Gallery', Icon: CameraIcon },
  { to: '/projects', label: 'Projects', Icon: CodeIcon },
];

const Projects = () => {
  return <Typography variant="h5">Projects</Typography>;
};

const Gallery = () => {
  return <Typography variant="h5">Gallery</Typography>;
};

class ResponsiveDrawer extends React.Component<IResponsiveDrawerProps, IResponsiveDrawerState> {
  public constructor(props: IResponsiveDrawerProps) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
  }

  public handleDrawerToggle = () => {
    this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
  };

  public render() {
    const { classes, theme, title } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {routes.map(({ label, to, Icon }) => {
            const linkProps = { to } as any;
            return (
              <ListItem onClick={this.handleLinkClick} button={true} key={label} component={Link} {...linkProps}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            );
          })}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap={true}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swap with js to avoid SEO duplication of links. */}
          <Hidden mdUp={true} implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown={true} implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open={true}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/projects" component={Projects} />
        </main>
      </div>
    );
  }

  private handleLinkClick = () => {
    this.setState({
      mobileOpen: false,
    });
  };
}

export default withStyles(stylesDeclarations, { withTheme: true })(ResponsiveDrawer);
