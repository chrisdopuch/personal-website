import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { SFC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import me from '../../images/me.jpg';
import usePageView from '../hooks/usePageView';

const stylesDeclarations = (theme: Theme) =>
  createStyles({
    '@keyframes face-spin': {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
    divider: {
      marginBottom: '10px',
      marginTop: '10px',
    },
    face: {
      animation: 'face-spin infinite 20s linear',
      borderRadius: '50%',
      height: '40vmin',
      margin: '10px',
      maxHeight: '300px',
      maxWidth: '300px',
      width: 'auto',
    },
    root: {
      paddingBottom: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit * 3,
      ...theme.mixins.gutters(),
    },
  });

interface IHomeProps extends WithStyles<typeof stylesDeclarations> {}

export const Home: SFC<IHomeProps & RouteComponentProps<any>> = (props) => {
  const { classes, location } = props;
  usePageView(location);
  return (
    <Paper className={classes.root} elevation={1}>
      <Typography variant="h2">Home</Typography>
      <Divider className={classes.divider} />
      <img src={me} className={classes.face} alt="my-face" />
      <Typography variant="body1">I wrote enough React to make my head spin!</Typography>
      <Typography variant="body1">More content to come soon...</Typography>
      <Typography variant="body1">
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </Typography>
    </Paper>
  );
};

export default withStyles(stylesDeclarations, { withTheme: true })(withRouter(Home));
