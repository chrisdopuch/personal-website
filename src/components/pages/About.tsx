import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import React, { Component, ComponentClass, ComponentType, Fragment } from 'react';
import meSinging from '../../images/me-singing.jpg';

const stylesDeclarations = (theme: Theme) =>
  createStyles({
    avatar: {
      height: '27vw',
      margin: 20,
      width: '27vw',
    },
    centered: {
      display: 'flex',
      justifyContent: 'center',
    },
    divider: {
      marginBottom: '10px',
      marginTop: '10px',
    },
    gridContainer: {
      marginTop: '10px',
    },
    list: {
      backgroundColor: theme.palette.background.paper,
      marginTop: '10px',
    },
    root: {
      paddingBottom: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit * 3,
      ...theme.mixins.gutters(),
    },
  });

interface IQuickFact {
  Icon: ComponentType<SvgIconProps>;
  primary: string;
  secondary: string;
  tertiary?: string;
  component?: ComponentClass<any> | string;
  componentProps?: object;
}

interface IAboutProps extends WithStyles<typeof stylesDeclarations> {}

export class About extends Component<IAboutProps> {
  public constructor(props: IAboutProps) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderAvatar = this.renderAvatar.bind(this);
    this.renderAvatar = this.renderAvatar.bind(this);
    this.renderQuickFacts = this.renderQuickFacts.bind(this);
  }

  public renderHeader() {
    const { classes } = this.props;
    return (
      <header>
        <Typography variant="h2" component="h3">
          About me
        </Typography>
        <Divider className={classes.divider} />
        <Typography component="p">
          Hi, my name is Chris Dopuch and I'm a Software Engineer working in Portland, Oregon. I moved to Portland from
          Columbia, Missouri after graduating from University of Missouri with both a CS and an IT degree. Currently I
          am employed by Moovel North America where I work on web applications and services using technologies like
          NodeJS, Typescript, React, and Redux. Outside of work I enjoy tabletop and roleplay gaming, watching cult
          movies, going to heavy metal concerts, drawing, and painting. On this site you can find many examples of my
          work including my art gallery as well as many of my programming projects.
        </Typography>
      </header>
    );
  }

  public renderAvatar() {
    const { classes } = this.props;
    return (
      <div className={classes.centered}>
        <Avatar alt="Chris Dopuch" src={meSinging} className={classes.avatar} />
      </div>
    );
  }

  public renderQuickFacts() {
    const { classes } = this.props;
    const quickFacts: IQuickFact[] = [
      {
        Icon: HomeIcon,
        primary: 'Location',
        secondary: 'Portland, Oregon',
      },
      {
        Icon: WorkIcon,
        primary: 'Job Title',
        secondary: 'Software Engineer at Moovel North America',
      },
      {
        Icon: SchoolIcon,
        primary: 'Education',
        secondary: 'BA in Computer Science, Univeristy of Missouri',
        tertiary: 'BS in Information Technology, Univeristy of Missouri',
      },
      {
        Icon: BuildIcon,
        primary: 'Technologies',
        secondary: 'NodeJS, Typescript, React, Redux, Express, HapiJS',
        tertiary: 'Go, Ruby on Rails, Swagger, LESS, SASS, Webpack, PHP',
      },
      {
        Icon: CodeIcon,
        component: 'a',
        componentProps: { href: 'http://github.com/chrisdopuch' },
        primary: 'Github Profile',
        secondary: 'http://github.com/chrisdopuch',
      },
    ];
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
  }

  public render() {
    const { classes } = this.props;

    return (
      <article>
        <Paper className={classes.root} elevation={1}>
          {this.renderHeader()}
          <Hidden smDown={true} implementation="css">
            <Grid container={true} spacing={24} className={classes.gridContainer}>
              <Grid item={true} xs={6}>
                {this.renderAvatar()}
              </Grid>
              <Grid item={true} xs={6}>
                {this.renderQuickFacts()}
              </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp={true} implementation="css">
            {this.renderAvatar()}
            {this.renderQuickFacts()}
          </Hidden>
        </Paper>
      </article>
    );
  }
}

export default withStyles(stylesDeclarations, { withTheme: true })(About);
