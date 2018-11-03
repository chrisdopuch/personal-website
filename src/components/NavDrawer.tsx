import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, MuiThemeProvider, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { Follow } from 'react-twitter-widgets';
import { appTheme } from './App';

const drawerWidth = 240;

const stylesDeclarations = (theme: Theme) => {
  return createStyles({
    drawer: {
      [theme.breakpoints.up('md')]: {
        flexShrink: 0,
        width: drawerWidth,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    social: {
      margin: '20px 10px',
      textAlign: 'left',
    },
    toolbar: theme.mixins.toolbar,
    twitter: {
      marginBottom: '10px',
    },
  });
};

interface INavDrawerProps extends WithStyles<typeof stylesDeclarations> {
  items: Array<{
    to: string;
    label: string;
    Icon: ComponentType<SvgIconProps>;
  }>;
  theme: Theme;
}

interface INavDrawerState {
  mobileDrawerOpen: boolean;
}

export class NavDrawer extends React.Component<INavDrawerProps, INavDrawerState> {
  public static defaultProps = {
    theme: appTheme,
  };

  public constructor(props: INavDrawerProps) {
    super(props);
    this.state = {
      mobileDrawerOpen: false,
    };
  }

  public handleDrawerToggle = () => {
    this.setState((state) => ({ mobileDrawerOpen: !state.mobileDrawerOpen }));
  };

  public handleLinkClick = () => {
    this.setState({
      mobileDrawerOpen: false,
    });
  };

  public renderDrawerContent() {
    const { classes, items } = this.props;
    return (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {items.map(({ label, to, Icon }) => {
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
        <Divider />
        <div className={classes.social}>
          <div className={classes.twitter}>
            <Follow username="chrisdopuch" />
          </div>
          <a className="github-button" href="https://github.com/chrisdopuch" aria-label="Follow @chrisdopuch on GitHub">
            Follow @chrisdopuch
          </a>
        </div>
      </div>
    );
  }

  public render() {
    const { classes, theme } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <nav className={classes.drawer}>
          {/* The implementation can be swap with js to avoid SEO duplication of links. */}
          <Hidden mdUp={true} implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileDrawerOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {this.renderDrawerContent()}
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
              {this.renderDrawerContent()}
            </Drawer>
          </Hidden>
        </nav>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(stylesDeclarations, { withTheme: true })(NavDrawer);
