import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { SFC } from 'react';
import GridGallery from 'react-grid-gallery';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import usePageView from '../../hooks/usePageView';
import { shuffleArray } from '../../utilities';

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
    caption: 'Me busting out some Lady Gaga Karaoke',
    filename: 'me-singing',
    thumbnailHeight: 300,
  },
  {
    caption: 'Me wearing armor in the SCA',
    filename: 'me-at-lillies',
    thumbnailHeight: 400,
  },
  {
    caption: 'Warhammer 40,000 Trench Diorama (front)',
    filename: 'trench-diorama-front',
    thumbnailHeight: 225,
  },
  {
    caption: 'Warhammer 40,000 Trench Diorama (side)',
    filename: 'trench-diorama-side',
    thumbnailHeight: 225,
  },
  {
    caption: 'Gitmoar, a data visualization hackathon project',
    filename: 'gitmoar',
    thumbnailHeight: 169,
  },
  {
    caption: 'Me hiking in Washington Park, Portland OR',
    filename: 'me-in-woods',
    thumbnailHeight: 169,
  },
  {
    caption: "At Steak 'n Shake, the greatest restaurant of all",
    filename: 'me-at-steak-n-shake',
    thumbnailHeight: 400,
  },
  {
    caption: 'Me when I worked at AppNexus',
    filename: 'me-at-appnexus',
    thumbnailHeight: 219,
  },
  {
    caption: 'Black Templars Marshal (Warhammer 40k)',
    filename: 'marshal',
    thumbnailHeight: 334,
  },
  {
    caption: 'Black Templars Landraider (Warhammer 40k)',
    filename: 'landraider',
    thumbnailHeight: 225,
  },
  {
    caption: 'Black Templars Dreadnought (Warhammer 40k)',
    filename: 'dreadnought',
    thumbnailHeight: 225,
  },
  {
    caption: 'Cesnica, a Traditional Serbian Christmas bread I baked',
    filename: 'cesnica',
    thumbnailHeight: 169,
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
