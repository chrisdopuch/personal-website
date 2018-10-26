// import AppBar from '@material-ui/core/AppBar';
import CssBaseline from "@material-ui/core/CssBaseline";
// import IconButton from '@material-ui/core/IconButton';
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import MenuIcon from '@material-ui/icons/Menu';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
// import me from './images/me.jpg';

const stylesDeclarations = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: "center",
    },
  });

interface IAppProps extends WithStyles<typeof stylesDeclarations> {
  title: string;
  theme: Theme;
}

class App extends React.Component<IAppProps> {
  public render() {
    const { classes, title } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <div className={classes.root}>
            <ResponsiveDrawer title={title} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default withStyles(stylesDeclarations, { withTheme: true })(App);
