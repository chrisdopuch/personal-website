import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { SFC } from 'react';
import GridGallery from 'react-grid-gallery';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import alexiaValachev from '../../images/alexia-valachev.jpg';
import beast09 from '../../images/beast-09.jpg';
import blackDragons from '../../images/black-dragons.jpg';
import butcher from '../../images/butcher.jpg';
import capstoneProject from '../../images/capstone-project.jpg';
import derwyd from '../../images/derwyd.jpg';
import ekmuss from '../../images/ekmuss.jpg';
import gamingRig from '../../images/gaming-rig.jpg';
import gnoll from '../../images/gnoll.jpg';
import juggernaut from '../../images/juggernaut.jpg';
import laptopStickers from '../../images/laptop-stickers.jpg';
import mandy from '../../images/mandy.jpg';
import ruin from '../../images/ruin.jpg';
import sorscha from '../../images/sorscha.jpg';
import vandana from '../../images/vandana.jpg';
import vlad from '../../images/vlad.png';
import widowmakers from '../../images/widowmakers.jpg';
import alexiaValachevThumb from '../../thumbnails/alexia-valachev_thumb.jpg';
import beast09Thumb from '../../thumbnails/beast-09_thumb.jpg';
import blackDragonsThumb from '../../thumbnails/black-dragons_thumb.jpg';
import butcherThumb from '../../thumbnails/butcher_thumb.jpg';
import capstoneProjectThumb from '../../thumbnails/capstone-project_thumb.jpg';
import derwydThumb from '../../thumbnails/derwyd_thumb.jpg';
import ekmussThumb from '../../thumbnails/ekmuss_thumb.jpg';
import gamingRigThumb from '../../thumbnails/gaming-rig_thumb.jpg';
import gnollThumb from '../../thumbnails/gnoll_thumb.jpg';
import juggernautThumb from '../../thumbnails/juggernaut_thumb.jpg';
import laptopStickersThumb from '../../thumbnails/laptop-stickers_thumb.jpg';
import mandyThumb from '../../thumbnails/mandy_thumb.jpg';
import ruinThumb from '../../thumbnails/ruin_thumb.jpg';
import sorschaThumb from '../../thumbnails/sorscha_thumb.jpg';
import vandanaThumb from '../../thumbnails/vandana_thumb.jpg';
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

const thumbnailWidth = 300;

const IMAGES = shuffleArray([
  {
    caption: 'Sorscha (Warmachine)',
    src: sorscha,
    thumbnail: sorschaThumb,
    thumbnailHeight: 169,
    thumbnailWidth,
  },
  {
    caption: "Derwyd the Druid (Friend's D&D Character, HeroForge)",
    src: derwyd,
    thumbnail: derwydThumb,
    thumbnailHeight: 169,
    thumbnailWidth,
  },
  {
    caption: 'My custom-built gaming PC',
    src: gamingRig,
    thumbnail: gamingRigThumb,
    thumbnailHeight: 225,
    thumbnailWidth,
  },
  {
    caption: 'CS Senior-Capstone UAV Computer Vision Project',
    src: capstoneProject,
    thumbnail: capstoneProjectThumb,
    thumbnailHeight: 169,
    thumbnailWidth,
  },
  {
    caption: "Vandana the Bard (Friend's D&D Character, Reaper)",
    src: vandana,
    thumbnail: vandanaThumb,
    thumbnailHeight: 225,
    thumbnailWidth,
  },
  {
    caption: "Ekmuss the Warlock (Friend's D&D Character, Reaper)",
    src: ekmuss,
    thumbnail: ekmussThumb,
    thumbnailHeight: 400,
    thumbnailWidth,
  },
  {
    caption: 'Gnoll Leader (Reaper Bones)',
    src: gnoll,
    thumbnail: gnollThumb,
    thumbnailHeight: 225,
    thumbnailWidth,
  },
  {
    caption: 'Black Dragon Pikemen (Warmachine)',
    src: blackDragons,
    thumbnail: blackDragonsThumb,
    thumbnailHeight: 225,
    thumbnailWidth,
  },
  {
    caption: 'Some of my laptop sticker layouts from the past',
    src: laptopStickers,
    thumbnail: laptopStickersThumb,
    thumbnailHeight: 225,
    thumbnailWidth,
  },
  {
    caption: 'Juggernaut (Warmachine)',
    src: juggernaut,
    thumbnail: juggernautThumb,
    thumbnailHeight: 169,
    thumbnailWidth,
  },
  {
    caption: 'Vladimir (a Pathfinder OC of mine)',
    src: vlad,
    thumbnail: vladThumb,
    thumbnailHeight: 404,
    thumbnailWidth,
  },
  {
    caption: 'Beast 09 (Warmachine)',
    src: beast09,
    thumbnail: beast09Thumb,
    thumbnailHeight: 169,
    thumbnailWidth,
  },
  {
    caption: 'Widowmakers (Warmachine)',
    src: widowmakers,
    thumbnail: widowmakersThumb,
    thumbnailHeight: 169,
    thumbnailWidth,
  },
  {
    caption: 'The Butcher (Warmachine)',
    src: butcher,
    thumbnail: butcherThumb,
    thumbnailHeight: 169,
    thumbnailWidth,
  },
  {
    caption: 'Mandy (from the movie Mandy)',
    src: mandy,
    thumbnail: mandyThumb,
    thumbnailHeight: 200,
    thumbnailWidth,
  },
  {
    caption: 'Ruin (Warmachine)',
    src: ruin,
    thumbnail: ruinThumb,
    thumbnailHeight: 169,
    thumbnailWidth,
  },
  {
    caption: 'Alexia and Valachev (Warmachine)',
    src: alexiaValachev,
    thumbnail: alexiaValachevThumb,
    thumbnailHeight: 225,
    thumbnailWidth,
  },
]);

const stylesDeclarations = (theme: Theme) =>
  createStyles({
    divider: {
      marginBottom: '10px',
      marginTop: '10px',
    },
    header: {
      marginBottom: '10px',
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
      <Typography variant="h2" className={classes.header}>
        Gallery
      </Typography>
      <Typography component="p">
        Here you will find a collection of projects and passions of mine, from computing to painting and everything in
        between. Miniature painting and drawing have been long-term interests of mine, and this gallery includes images
        from my time playing Warhammer, Warmachine, and various tabletop RPGs. This gallery also exhibits some of my
        various computing projects, from custom gaming rigs to autonomous flying vehicles.
      </Typography>
      <Divider className={classes.divider} />
      <GridGallery images={IMAGES} enableImageSelection={false} />
    </Paper>
  );
};

export default withStyles(stylesDeclarations, { withTheme: true })(withRouter(Gallery));
