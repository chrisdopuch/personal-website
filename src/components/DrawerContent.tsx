import { Switch } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { ComponentType, SFC } from 'react';
import { useStore } from 'react-hookstore';
import { Link } from 'react-router-dom';
import { Follow } from 'react-twitter-widgets';
import { IAppStore, isDarkModeKey } from '../store';

const stylesDeclarations = (theme: Theme) => {
  return createStyles({
    darkMode: {
      paddingLeft: 0,
    },
    listItemIcon: {
      marginRight: 6,
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

interface IDrawerContentProps extends WithStyles<typeof stylesDeclarations> {
  items: Array<{
    to: string;
    label: string;
    Icon: ComponentType<SvgIconProps>;
  }>;
}

export const DrawerContent: SFC<IDrawerContentProps> = (props) => {
  const { classes, items } = props;
  const [appStore, setStore]: [IAppStore, (s: IAppStore) => void] = useStore('appStore');

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {items.map(({ label, to, Icon }) => {
          const linkProps = { to } as any;
          return (
            <ListItem
              onClick={() => setStore(Object.assign({}, appStore, { isNavDrawerOpen: false }))}
              button={true}
              key={label}
              component={Link}
              {...linkProps}
            >
              <ListItemIcon>
                <Icon className={classes.listItemIcon} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <ListItem className={classes.darkMode}>
        <Switch
          checked={appStore.isDarkMode}
          onChange={(e) => {
            const isDarkMode = e.target.checked;
            localStorage.setItem(isDarkModeKey, isDarkMode.toString());
            return setStore(Object.assign({}, appStore, { isDarkMode }));
          }}
          color="primary"
        />
        <ListItemText primary="Dark Mode" />
      </ListItem>
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
};

export default withStyles(stylesDeclarations, { withTheme: true })(DrawerContent);
