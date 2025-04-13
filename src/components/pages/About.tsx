import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import ComputerIcon from '@material-ui/icons/Computer';
import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import React, { ComponentType, Fragment, SFC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import usePageView from '../../hooks/usePageView';
import meSinging from '../../images/me-singing.jpg';

const stylesDeclarations = (theme: Theme) =>
  createStyles({
    avatar: {
      height: '27vw',
      margin: 20,
      width: '27vw',
      maxWidth: 500,
      maxHeight: 500,
    },
    centered: {
      display: 'flex',
      justifyContent: 'center',
    },
    divider: {
      marginBottom: 25,
      marginTop: 25,
    },
    gridContainer: {
      marginTop: 10,
    },
    list: {
      backgroundColor: theme.palette.background.paper,
      marginTop: 10,
    },
    root: {
      maxWidth: 1500,
      margin: '0 auto',
      paddingBottom: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit * 3,
      ...theme.mixins.gutters(),
    },
    about: {
      marginBottom: 20,
      maxWidth: 1000,
      margin: '0 auto',
    },
  });

interface IQuickFact {
  Icon: ComponentType<SvgIconProps>;
  primary: string;
  secondary: string;
  tertiary?: string;
  component?: React.ReactType<ListItemProps>;
  componentProps?: object;
}

const quickFacts: IQuickFact[] = [
  {
    Icon: HomeIcon,
    primary: 'Location',
    secondary: 'Portland, Oregon',
  },
  {
    Icon: WorkIcon,
    primary: 'Job Title',
    secondary: 'Senior Software Engineer at Headway',
  },
  {
    Icon: SchoolIcon,
    primary: 'Education',
    secondary: 'BA in Computer Science, Univeristy of Missouri',
    tertiary: 'BS in Information Technology, Univeristy of Missouri',
  },
  {
    Icon: BuildIcon,
    primary: 'Frontend Technologies',
    secondary: 'HTML, CSS, JavaScript, React, TypeScript, TailwindCSS, Material-UI, NextJS',
  },
  {
    Icon: ComputerIcon,
    primary: 'Backend Technologies',
    secondary: 'Python, NodeJS, PHP, FastAPI, Django, PostgreSQL, Docker, Kubernetes, AWS',
  },
  {
    Icon: CodeIcon,
    component: 'a',
    componentProps: { href: 'http://github.com/chrisdopuch' },
    primary: 'Github Profile',
    secondary: 'http://github.com/chrisdopuch',
  },
];

interface IAboutProps extends WithStyles<typeof stylesDeclarations> {}

export const About: SFC<IAboutProps & RouteComponentProps<any>> = (props) => {
  const { classes, location } = props;
  usePageView(location);

  return (
    <article>
      <Paper className={classes.root} elevation={1}>
        <Header {...props} />
        <Hidden smDown={true} implementation="css">
          <Grid container={true} spacing={24} className={classes.gridContainer}>
            <Grid item={true} xs={6}>
              <ProfilePicture {...props} />
            </Grid>
            <Grid item={true} xs={6}>
              <QuickFacts {...props} />
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp={true} implementation="css">
          <ProfilePicture {...props} />
          <QuickFacts {...props} />
        </Hidden>
      </Paper>
    </article>
  );
};

export const Header: SFC<IAboutProps> = (props) => {
  const { classes } = props;
  return (
    <header>
      <Typography variant="h2" component="h3">
        About me
      </Typography>
      <Divider className={classes.divider} />
      <section className={classes.about}>
        <Typography component="p">
          Hi, my name is Chris Dopuch and I'm a Software Engineer working in Portland, Oregon. I moved to Portland from
          Columbia, Missouri after graduating from University of Missouri with both a CS and an IT degree. Currently I
          work as a Senior Software Engineer on the Trust Foundations team at Headway, where I work with technologies
          like Python, TypeScript, FastAPI, React, PostgreSQL, and more! My team is responsible for the core auth
          infrastructure that powers Headway's products, including authentication, authorization, privacy, security
          auditing, and other features that guard the integrity of Headway's products and data. I'm passionate about
          mental health and providing accessible therapy for all!
        </Typography>
        <br />
        <Typography component="p">
          Outside of work I'm a rennaissance man with many passions and hobbies. My interests include painting, drawing,
          photography, gaming, and medieval reenactment. I am also an avid fitness enthusiast, with interests in weight
          lifting, running, yoga, and martial arts. On this site you can find many examples of my work including my art
          gallery as well as many of my programming projects.
        </Typography>
      </section>
    </header>
  );
};

export const ProfilePicture: SFC<IAboutProps> = (props) => {
  const { classes } = props;
  return (
    <div className={classes.centered}>
      <Avatar alt="Chris Dopuch" src={meSinging} className={classes.avatar} />
    </div>
  );
};

export const QuickFacts: SFC<IAboutProps> = (props) => {
  const { classes } = props;
  return (
    <Fragment>
      <Typography variant="h5" component="h5">
        Quick Facts
      </Typography>
      <Divider className={classes.divider} />
      <div className={classes.list}>
        <List>
          {quickFacts.map(({ primary, secondary, tertiary, Icon, component, componentProps }) => {
            return (
              <Fragment key={primary}>
                <ListItem key={primary} component={component} {...componentProps} divider={!tertiary}>
                  <ListItemAvatar>
                    <Avatar>
                      <Icon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={primary} secondary={secondary} />
                </ListItem>
                {tertiary ? (
                  <ListItem key={tertiary} divider={true}>
                    <ListItemText inset={true} secondary={tertiary} />
                  </ListItem>
                ) : null}
              </Fragment>
            );
          })}
        </List>
      </div>
    </Fragment>
  );
};

export default withStyles(stylesDeclarations, { withTheme: true })(withRouter(About));
