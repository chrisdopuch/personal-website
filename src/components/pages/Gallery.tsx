import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { SFC } from 'react';
import GridGallery from 'react-grid-gallery';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import beast09 from '../../images/beast-09-front.jpg';
import beast09Thumb from '../../thumbnails/beast-09-front_thumb.jpg';
import usePageView from '../hooks/usePageView';

const IMAGES = [
  {
    caption: 'Beast 09 (Warmachine)',
    src: beast09,
    thumbnail: beast09Thumb,
    thumbnailHeight: 169,
    thumbnailWidth: 300,
  },
];

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
