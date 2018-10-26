import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import me from '../images/me.jpg';

const stylesDeclarations = (theme: Theme) =>
  createStyles({
    '@keyframes face-spin': {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
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
  });

interface IHomeProps extends WithStyles<typeof stylesDeclarations> {}

class Home extends React.Component<IHomeProps> {
  public render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <img src={me} className={classes.face} alt="my-face" />
        <Typography variant="body1">I wrote enough React to make my head spin!</Typography>
        <Typography variant="body1">More content to come soon...</Typography>
        <Typography variant="body1">
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </Typography>
      </React.Fragment>
    );
  }
}

export default withStyles(stylesDeclarations)(Home);
