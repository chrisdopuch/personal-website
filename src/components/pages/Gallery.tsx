import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { SFC } from 'react';
import GridGallery from 'react-grid-gallery';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { shuffleArray } from '../../utilities';
import usePageView from '../hooks/usePageView';

const thumbnailWidth = 300;

interface IGalleryImage {
  caption: string;
  filename: string;
  thumbnailHeight: number;
  isPNG?: boolean;
}

const mapGalleryImagesForGrid = (img: IGalleryImage) => {
  const { isPNG, filename, caption, thumbnailHeight } = img;
  const src = isPNG ? require(`../../images/${filename}.png`) : require(`../../images/${filename}.jpg`);
  const thumbnail = isPNG
    ? require(`../../thumbnails/${filename}_thumb.png`)
    : require(`../../thumbnails/${filename}_thumb.jpg`);
  return {
    caption,
    src,
    thumbnail,
    thumbnailHeight,
    thumbnailWidth,
  };
};

const galleryImages: IGalleryImage[] = shuffleArray([
  {
    caption: 'Sorscha (Warmachine)',
    filename: 'sorscha',
    thumbnailHeight: 169,
  },
  {
    caption: "Derwyd the Druid (Friend's D&D Character, HeroForge)",
    filename: 'derwyd',
    thumbnailHeight: 225,
  },
  {
    caption: 'My custom-built gaming PC',
    filename: 'gaming-rig',
    thumbnailHeight: 225,
  },
  {
    caption: 'CS Senior-Capstone UAV Computer Vision Project',
    filename: 'capstone-project',
    thumbnailHeight: 169,
  },
  {
    caption: "Vandana the Bard (Friend's D&D Character, Reaper)",
    filename: 'vandana',
    thumbnailHeight: 225,
  },
  {
    caption: "Ekmuss the Warlock (Friend's D&D Character, Reaper)",
    filename: 'ekmuss',
    thumbnailHeight: 400,
  },
  {
    caption: 'Gnoll Leader (Reaper Bones)',
    filename: 'gnoll',
    thumbnailHeight: 225,
  },
  {
    caption: 'Black Dragon Pikemen (Warmachine)',
    filename: 'black-dragons',
    thumbnailHeight: 225,
  },
  {
    caption: 'Some of my laptop sticker layouts from the past',
    filename: 'laptop-stickers',
    thumbnailHeight: 225,
  },
  {
    caption: 'Juggernaut (Warmachine)',
    filename: 'juggernaut',
    thumbnailHeight: 169,
  },
  {
    caption: 'Vladimir (a Pathfinder OC of mine)',
    filename: 'vlad',
    isPNG: true,
    thumbnailHeight: 404,
  },
  {
    caption: 'Beast 09 (Warmachine)',
    filename: 'beast-09',
    thumbnailHeight: 169,
  },
  {
    caption: 'Widowmakers (Warmachine)',
    filename: 'widowmakers',
    thumbnailHeight: 169,
  },
  {
    caption: 'The Butcher (Warmachine)',
    filename: 'butcher',
    thumbnailHeight: 169,
  },
  {
    caption: 'Mandy (from the movie Mandy)',
    filename: 'mandy',
    thumbnailHeight: 200,
  },
  {
    caption: 'Ruin (Warmachine)',
    filename: 'ruin',
    thumbnailHeight: 169,
  },
  {
    caption: 'Alexia and Valachev (Warmachine)',
    filename: 'alexia-valachev',
    thumbnailHeight: 225,
  },
]);

const images = galleryImages.map(mapGalleryImagesForGrid);

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
      <GridGallery images={images} enableImageSelection={false} />
    </Paper>
  );
};

export default withStyles(stylesDeclarations, { withTheme: true })(withRouter(Gallery));
