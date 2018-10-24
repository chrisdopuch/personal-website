import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import me from './me.jpg';

const stylesDeclarations = (theme: Theme) => createStyles({
  '@keyframes face-spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
  face: {
    animation: 'face-spin infinite 20s linear',
    borderRadius: '50%',
    height: '40vmin',
    margin: '10px',
    maxHeight: '300px',
    maxWidth: '300px',
    width: 'auto'
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
});

interface IAppProps extends WithStyles<typeof stylesDeclarations> {
  title: string;
}

class App extends React.Component<IAppProps> {
  public render() {
    const { classes, title } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <img src={me} className={classes.face} alt="my-face"/>
          <p>
            I wrote enough React to make my head spin!
          <br/>
            More content to come soon...
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
      </div>
    );
  }
}

export default withStyles(stylesDeclarations)(App);
