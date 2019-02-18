import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { ComponentType, SFC } from 'react';
import useDispatch from '../hooks/useDispatch';
import useGlobalState from '../hooks/useGlobalState';
import DrawerContent from './DrawerContent';

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
  });
};

export interface INavDrawerProps extends WithStyles<typeof stylesDeclarations, true> {
  items: Array<{
    to: string;
    label: string;
    Icon: ComponentType<SvgIconProps>;
  }>;
}

export const NavDrawer: SFC<INavDrawerProps> = (props) => {
  const { classes, theme, items } = props;
  const isNavDrawerOpen = useGlobalState('isNavDrawerOpen');
  const dispatch = useDispatch();

  return (
    <nav className={classes.drawer}>
      <Hidden mdUp={true} implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={isNavDrawerOpen}
          onClose={() => dispatch({ type: 'setNavDrawerOpen', payload: false })}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <DrawerContent items={items} />
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
          <DrawerContent items={items} />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default withStyles(stylesDeclarations, { withTheme: true })(NavDrawer);
