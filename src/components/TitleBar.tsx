import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React, { SFC } from 'react';
import useDispatch from '../hooks/useDispatch';

const stylesDeclarations = (theme: Theme) => {
  return createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: 20,
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  });
};

interface ITitleBarProps extends WithStyles<typeof stylesDeclarations, true> {
  title: string;
}

export const TitleBar: SFC<ITitleBarProps> = (props) => {
  const { classes, title } = props;
  const dispatch = useDispatch();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={() => dispatch({ type: 'toggleNavDrawerOpen' })}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap={true}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(stylesDeclarations, { withTheme: true })(TitleBar);
