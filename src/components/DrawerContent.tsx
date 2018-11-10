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

const stylesDeclarations = (theme: Theme) => {
  return createStyles({
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
  const setisMobileDrawerOpen = useStore()[1];

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {items.map(({ label, to, Icon }) => {
          const linkProps = { to } as any;
          return (
            <ListItem
              onClick={() => setisMobileDrawerOpen(false)} // tslint:disable-line
              button={true}
              key={label}
              component={Link}
              {...linkProps}
            >
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
};

export default withStyles(stylesDeclarations, { withTheme: true })(DrawerContent);
