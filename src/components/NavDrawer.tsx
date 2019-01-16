import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { ComponentType, SFC } from 'react';
import { useStore } from 'react-hookstore';
import { IAppStore } from '..';
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
  const [appStore, setStore]: [IAppStore, (s: IAppStore) => void] = useStore('appStore');

  return (
    <nav className={classes.drawer}>
      {/* The implementation can be swap with js to avoid SEO duplication of links. */}
      <Hidden mdUp={true} implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={appStore.isNavDrawerOpen}
          onClose={() => setStore(Object.assign({}, appStore, { isNavDrawerOpen: false }))}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
