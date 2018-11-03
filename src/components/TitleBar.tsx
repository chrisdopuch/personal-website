import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
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

interface ITitleBarProps extends WithStyles<typeof stylesDeclarations> {
  title: string;
  handleMenuClick: () => void;
}

export class TitleBar extends React.Component<ITitleBarProps> {
  public static defaultProps = {
    handleMenuClick: () => undefined,
    theme: appTheme,
  };

  public render() {
    const { classes, title, handleMenuClick } = this.props;

    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Open drawer" onClick={handleMenuClick} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap={true}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(stylesDeclarations, { withTheme: true })(TitleBar);
