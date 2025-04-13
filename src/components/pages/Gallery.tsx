import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
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

const careerAndTechnologyImages: IGalleryImage[] = shuffleArray([
  {
    caption: 'Me when I worked at AppNexus',
    filename: 'me-at-appnexus',
    thumbnailHeight: 219,
  },
  {
    caption: 'On a scavenger hunt at Moovel',
    filename: 'moovel-scavenger-hunt',
    thumbnailHeight: 225,
  },
  {
    caption: 'Karaoke at AppNexus Holiday Party',
    filename: 'me-singing',
    thumbnailHeight: 300,
  },
  {
    caption: 'Gitmoar, a data visualization hackathon project',
    filename: 'gitmoar',
    thumbnailHeight: 169,
  },
  {
    caption: 'My SLA Resin 3D printer',
    filename: 'sla-printer',
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
    caption: 'Some of my laptop sticker layouts from the past',
    filename: 'laptop-stickers',
    thumbnailHeight: 225,
  },
  {
    caption: 'Zapier Minneapolis Off-site trip',
    filename: 'minneapolis-offsite',
    thumbnailHeight: 225,
  },
  {
    caption: 'My A1-mini 3D printer',
    filename: 'a1-mini',
    thumbnailHeight: 226,
  },
  {
    caption: 'Me at Headaway 2024 Retreat',
    filename: 'headaway-2024',
    thumbnailHeight: 225,
  },
  {
    caption: 'Seattle Team Offsite 2024',
    filename: 'seattle-offsite-2024',
    thumbnailHeight: 225,
  },
]);

const lifeAndTravelImages: IGalleryImage[] = shuffleArray([
  {
    caption: 'Me hiking in Washington Park, Portland OR',
    filename: 'me-in-woods',
    thumbnailHeight: 169,
  },
  {
    caption: 'Getting the keys to our first house',
    filename: 'house-keys',
    thumbnailHeight: 400,
  },
  {
    caption: 'Me at Plitvice Lakes National Park, Croatia',
    filename: 'plitvice',
    thumbnailHeight: 225,
  },
  {
    caption: "At Steak 'n Shake, the greatest restaurant of all",
    filename: 'me-at-steak-n-shake',
    thumbnailHeight: 400,
  },
  {
    caption: "Me, very confused at a fake Steak 'n Shake",
    filename: 'steak-n-fake',
    thumbnailHeight: 225,
  },
  {
    caption: 'Hiking on Mount Hood with my family',
    filename: 'mount-hood',
    thumbnailHeight: 226,
  },
  {
    caption: 'Hiking at Smith Rock, Oregon',
    filename: 'smith-rock',
    thumbnailHeight: 225,
  },
  {
    caption: 'My wife and I getting eloped at the rose garden, Portland OR',
    filename: 'elopement',
    thumbnailHeight: 400,
  },
  {
    caption: 'Me proposing to my wife at Frankfort pier, Michigan',
    filename: 'proposal',
    thumbnailHeight: 225,
  },
  {
    caption: 'Walking in Forest Park, Portland Oregon',
    filename: 'forest-park',
    thumbnailHeight: 400,
  },
  {
    caption: 'My wife and I in Ljubljana, Slovenia',
    filename: 'ljubljana',
    thumbnailHeight: 225,
  },
  {
    caption: 'Folk music concert in Zadar, Croatia',
    filename: 'folk-concert-zadar',
    thumbnailHeight: 225,
  },
  {
    caption: 'My wife and I on the Adriatic Coast of Croatia',
    filename: 'adriatic-coast',
    thumbnailHeight: 225,
  },
  {
    caption: 'My wife and I at Crater Lake, Oregon',
    filename: 'crater-lake',
    thumbnailHeight: 398,
  },
]);

const miniaturesImages: IGalleryImage[] = shuffleArray([
  {
    caption: 'Sorscha (Warmachine)',
    filename: 'sorscha',
    thumbnailHeight: 169,
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
    caption: 'Ruin (Warmachine)',
    filename: 'ruin',
    thumbnailHeight: 169,
  },
  {
    caption: 'Alexia and Valachev (Warmachine)',
    filename: 'alexia-valachev',
    thumbnailHeight: 225,
  },
  {
    caption: 'Saxon Cavalry (Saga)',
    filename: 'saxon-cavalry',
    thumbnailHeight: 225,
  },
  {
    caption: 'Kingdoms of Men vs Ogre Kingdoms (Kings of War)',
    filename: 'men-vs-gators',
    thumbnailHeight: 225,
  },
  {
    caption: 'Juggernaut (Warmachine)',
    filename: 'juggernaut',
    thumbnailHeight: 169,
  },
  {
    caption: 'Beast 09 (Warmachine)',
    filename: 'beast-09',
    thumbnailHeight: 169,
  },
  {
    caption: 'The Butcher (Warmachine)',
    filename: 'butcher',
    thumbnailHeight: 169,
  },
  {
    caption: 'Celtic Druid (Kings of War)',
    filename: 'celtic-druid',
    thumbnailHeight: 225,
  },
  {
    caption: 'Zerilieth, Dark Elven General (Kings of War)',
    filename: 'zerilieth',
    thumbnailHeight: 398,
  },
  {
    caption: 'Celtic Archers (Kings of War)',
    filename: 'celtic-archers',
    thumbnailHeight: 226,
  },
  {
    caption: 'Saxons vs Greeks (Saga)',
    filename: 'saxons-vs-greeks',
    thumbnailHeight: 226,
  },
  {
    caption: 'Sankuri, Dark Sorceress (Kings of War)',
    filename: 'sankuri',
    thumbnailHeight: 398,
  },
  {
    caption: 'Celtic General on Wyvern (Kings of War)',
    filename: 'celtic-general',
    thumbnailHeight: 399,
  },
  {
    caption: "Baba Yaga's Hut (Saga)",
    filename: 'baba-yaga',
    thumbnailHeight: 225,
  },
]);

const artImages: IGalleryImage[] = shuffleArray([
  {
    caption: 'Mandy (from the movie Mandy)',
    filename: 'mandy',
    thumbnailHeight: 200,
  },
  {
    caption: 'Vladimir (a Pathfinder OC of mine)',
    filename: 'vlad',
    thumbnailHeight: 404,
  },
  {
    caption: "Ekmuss the Warlock (Friend's D&D Character, Reaper)",
    filename: 'ekmuss',
    thumbnailHeight: 400,
  },
  {
    caption: 'My take on the Sun tarot card',
    filename: 'the-sun',
    thumbnailHeight: 398,
  },
  {
    caption: "My sister's cats, in a medieval illuminated manuscript style",
    filename: 'medieval-cats',
    thumbnailHeight: 227,
  },
  {
    caption: 'An esoteric mandala that contains significant personal meaning',
    filename: 'mandala',
    thumbnailHeight: 381,
  },
  {
    caption: 'An armored fencer',
    filename: 'fencer',
    thumbnailHeight: 362,
  },
  {
    caption: 'My take on Red Sonja, the comic book heroine',
    filename: 'red-sonja',
    thumbnailHeight: 348,
  },
]);

const reenactmentAndCultureImages: IGalleryImage[] = shuffleArray([
  {
    caption: 'Me wearing armor in the SCA',
    filename: 'me-at-lillies',
    thumbnailHeight: 400,
  },
  {
    caption: 'Me at the Portland Serbian Festival',
    filename: 'serbian-fest',
    thumbnailHeight: 226,
  },
  {
    caption: 'Cesnica, a Traditional Serbian Christmas bread I baked',
    filename: 'cesnica',
    thumbnailHeight: 169,
  },
  {
    caption: 'Another Cesnica bread, Chrismas 2021',
    filename: 'cesnica-2021',
    thumbnailHeight: 225,
  },
  {
    caption: 'Another Cesnica bread, Chrismas 2020',
    filename: 'cesnica-2020',
    thumbnailHeight: 225,
  },
  {
    caption: 'My wife and I at a Renaissance Faire themed wedding',
    filename: 'goth-wedding',
    thumbnailHeight: 226,
  },
  {
    caption: 'My eastern european style armor',
    filename: 'armor',
    thumbnailHeight: 304,
  },
  {
    caption: 'My custom made lamellar cuirass',
    filename: 'lamellar-armor',
    thumbnailHeight: 398,
  },
  {
    caption: 'Me and my friend at the Portland Viking Festival',
    filename: 'viking-fest',
    thumbnailHeight: 398,
  },
  {
    caption: 'Me and my wife at the Portland Viking Festival',
    filename: 'viking-boat',
    thumbnailHeight: 225,
  },
  {
    caption: 'Me and my wife just being medieval in the woods',
    filename: 'medievaling',
    thumbnailHeight: 226,
  },
  {
    caption: "Me hanging out with roman soldiers in Diocletian's Palace, Split Croatia",
    filename: 'romans',
    thumbnailHeight: 225,
  },
  {
    caption: 'My earliest medieval reenactment days in Peace Park, Columbia Missouri',
    filename: 'peace-park',
    thumbnailHeight: 200,
  },
  {
    caption: 'My homebrewed mead',
    filename: 'mead-bottles',
    thumbnailHeight: 225,
  },
]);

const images = {
  careerAndTechnology: careerAndTechnologyImages.map(mapGalleryImagesForGrid),
  lifeAndTravel: lifeAndTravelImages.map(mapGalleryImagesForGrid),
  miniatures: miniaturesImages.map(mapGalleryImagesForGrid),
  art: artImages.map(mapGalleryImagesForGrid),
  reenactmentAndCulture: reenactmentAndCultureImages.map(mapGalleryImagesForGrid),
};

const stylesDeclarations = (theme: Theme) =>
  createStyles({
    divider: {
      marginBottom: theme.spacing.unit * 4,
      marginTop: theme.spacing.unit * 4,
    },
    header: {
      marginBottom: theme.spacing.unit * 3,
    },
    root: {
      maxWidth: 1500,
      margin: '0 auto',
      height: '100%',
      paddingBottom: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit * 3,
      ...theme.mixins.gutters(),
    },
    section: {
      width: '100%',
      marginBottom: theme.spacing.unit * 4,
    },
    sectionTitle: {
      width: '100%',
      marginBottom: theme.spacing.unit * 3,
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

      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h4" className={classes.sectionTitle}>
            Career and Technology
          </Typography>
          <GridGallery images={images.careerAndTechnology} enableImageSelection={false} />
        </Grid>
      </Grid>

      <Divider className={classes.divider} />

      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h4" className={classes.sectionTitle}>
            Life and Travel
          </Typography>
          <GridGallery images={images.lifeAndTravel} enableImageSelection={false} />
        </Grid>
      </Grid>

      <Divider className={classes.divider} />

      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h4" className={classes.sectionTitle}>
            Miniatures
          </Typography>
          <GridGallery images={images.miniatures} enableImageSelection={false} />
        </Grid>
      </Grid>

      <Divider className={classes.divider} />

      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h4" className={classes.sectionTitle}>
            Art
          </Typography>
          <GridGallery images={images.art} enableImageSelection={false} />
        </Grid>
      </Grid>

      <Divider className={classes.divider} />

      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h4" className={classes.sectionTitle}>
            Reenactment and Culture
          </Typography>
          <GridGallery images={images.reenactmentAndCulture} enableImageSelection={false} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(stylesDeclarations, { withTheme: true })(withRouter(Gallery));
