import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React from "react";
import { Link, Route } from "react-router-dom";

const drawerWidth = 240;

const stylesDeclarations = (theme: Theme) =>
  createStyles({
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        flexShrink: 0,
        width: drawerWidth,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    menuButton: {
      marginRight: 20,
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    root: {
      display: "flex",
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
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button={true} key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button={true} key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} title={title}>
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
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swap with js to avoid SEO duplication of links. */}
          <Hidden smUp={true} implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
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
          <Hidden xsDown={true} implementation="css">
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
          <Route path="/" exact={true} component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </main>
      </div>
    );
  }
}

export default withStyles(stylesDeclarations, { withTheme: true })(ResponsiveDrawer);
