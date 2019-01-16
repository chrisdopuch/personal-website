import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React, { SFC } from 'react';
import { useStore } from 'react-hookstore';
import { IAppStore } from '../index';
import { appTheme } from './App';

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
  const [appStore, setStore]: [IAppStore, (s: IAppStore) => void] = useStore('appStore');

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={() =>
            setStore(
              Object.assign({}, appStore, {
                isNavDrawerOpen: !appStore.isNavDrawerOpen,
              })
            )
          }
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

TitleBar.defaultProps = {
  theme: appTheme,
};

export default withStyles(stylesDeclarations, { withTheme: true })(TitleBar);
