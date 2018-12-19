import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { SFC } from 'react';
import GridGallery from 'react-grid-gallery';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import alexiaValachev from '../../images/alexia-valachev.jpg';
import beast09 from '../../images/beast-09.jpg';
import butcher from '../../images/butcher.jpg';
import juggernaut from '../../images/juggernaut.jpg';
import mandy from '../../images/mandy.jpg';
import ruin from '../../images/ruin.jpg';
import vlad from '../../images/vlad.png';
import widowmakers from '../../images/widowmakers.jpg';
import alexiaValachevThumb from '../../thumbnails/alexia-valachev_thumb.jpg';
import beast09Thumb from '../../thumbnails/beast-09_thumb.jpg';
import butcherThumb from '../../thumbnails/butcher_thumb.jpg';
import juggernautThumb from '../../thumbnails/juggernaut_thumb.jpg';
import mandyThumb from '../../thumbnails/mandy_thumb.jpg';
import ruinThumb from '../../thumbnails/ruin_thumb.jpg';
import vladThumb from '../../thumbnails/vlad_thumb.png';
import widowmakersThumb from '../../thumbnails/widowmakers_thumb.jpg';
import usePageView from '../hooks/usePageView';

function shuffleArray(array: any[]) {
  let currentIndex = array.length;
  let temporaryValue = currentIndex;
  let randomIndex = currentIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const IMAGES = shuffleArray([
  {
    caption: 'Juggernaut (Warmachine)',
    src: juggernaut,
    thumbnail: juggernautThumb,
    thumbnailHeight: 169,
    thumbnailWidth: 300,
  },
  {
    caption: 'Vladimir (a Pathfinder OC of mine)',
    src: vlad,
    thumbnail: vladThumb,
    thumbnailHeight: 404,
    thumbnailWidth: 300,
  },
  {
    caption: 'Beast 09 (Warmachine)',
    src: beast09,
    thumbnail: beast09Thumb,
    thumbnailHeight: 169,
    thumbnailWidth: 300,
  },
  {
    caption: 'Widowmakers (Warmachine)',
    src: widowmakers,
    thumbnail: widowmakersThumb,
    thumbnailHeight: 169,
    thumbnailWidth: 300,
  },
  {
    caption: 'The Butcher (Warmachine)',
    src: butcher,
    thumbnail: butcherThumb,
    thumbnailHeight: 169,
    thumbnailWidth: 300,
  },
  {
    caption: 'Mandy (from the movie Mandy)',
    src: mandy,
    thumbnail: mandyThumb,
    thumbnailHeight: 200,
    thumbnailWidth: 300,
  },
  {
    caption: 'Ruin (Warmachine)',
    src: ruin,
    thumbnail: ruinThumb,
    thumbnailHeight: 169,
    thumbnailWidth: 300,
  },
  {
    caption: 'Alexia and Valachev (Warmachine)',
    src: alexiaValachev,
    thumbnail: alexiaValachevThumb,
    thumbnailHeight: 225,
    thumbnailWidth: 300,
  },
]);

const stylesDeclarations = (theme: Theme) =>
  createStyles({
    divider: {
      marginBottom: '10px',
      marginTop: '10px',
    },
    root: {
      height: '100%',
      paddingBottom: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit * 3,
      ...theme.mixins.gutters(),
    },
    thumbnail: {},
  });

interface IGalleryProps extends WithStyles<typeof stylesDeclarations> {}

export const Gallery: SFC<IGalleryProps & RouteComponentProps<any>> = (props) => {
  const { classes, location } = props;
  usePageView(location);
  return (
    <Paper className={classes.root} elevation={1}>
      <Typography variant="h2">Gallery</Typography>
      <Divider className={classes.divider} />
      <GridGallery images={IMAGES} enableImageSelection={false} />
    </Paper>
  );
};

export default withStyles(stylesDeclarations, { withTheme: true })(withRouter(Gallery));
