import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { SFC } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import usePageView from '../../hooks/usePageView';
import me from '../../images/headshot.jpg';
import gitmoar from '../../thumbnails/gitmoar_thumb.jpg';
import gothWedding from '../../thumbnails/goth-wedding_thumb.jpg';
import trenchDiorama from '../../thumbnails/trench-diorama-side_thumb.jpg';

const stylesDeclarations = (theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 450,
    },
    divider: {
      marginBottom: 20,
      marginTop: 20,
    },
    face: {
      borderRadius: '50%',
      height: '40vmin',
      margin: 10,
      maxHeight: 260,
      maxWidth: 260,
      width: 'auto',
    },
    media: {
      height: 120,
    },
    aboutMedia: {
      height: 120,
      backgroundSize: 'cover',
      backgroundPosition: 'center 30%',
    },
    galleryMedia: {
      height: 120,
      backgroundSize: 'cover',
      backgroundPosition: 'center 45%',
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
  });

interface IHomeProps extends WithStyles<typeof stylesDeclarations> {}

const GalleryLink = (props: any) => <Link to="/gallery" {...props} />;
const AboutLink = (props: any) => <Link to="/about" {...props} />;

export const Home: SFC<IHomeProps & RouteComponentProps<any>> = (props) => {
  const { classes, location } = props;
  usePageView(location);
  return (
    <Paper className={classes.root} elevation={1}>
      <Typography variant="h2">Home</Typography>
      <Divider className={classes.divider} />
      <Typography variant="h4">Welcome to my personal website</Typography>
      <Typography variant="subtitle1">
        <i>Where I write about my career, my projects, and my life</i>
      </Typography>
      <img src={me} className={classes.face} alt="my-face" />
      <Divider className={classes.divider} />
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={true}>
          <Card className={classes.card}>
            <CardActionArea component={AboutLink}>
              <CardMedia className={classes.aboutMedia} image={gothWedding} title="About me" />
              <CardContent>
                <Typography gutterBottom={true} variant="h5" component="h2">
                  Learn About Me
                </Typography>
                <Typography component="p">
                  Learn more about me, Chris Dopuch! Find out about my background and education, my areas of expertise,
                  my current career and passions, and more
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" component={AboutLink}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item={true} xs={true}>
          <Card className={classes.card}>
            <CardActionArea component={GalleryLink}>
              <CardMedia className={classes.galleryMedia} image={trenchDiorama} title="Image Gallery" />
              <CardContent>
                <Typography gutterBottom={true} variant="h5" component="h2">
                  Browse Image Gallery
                </Typography>
                <Typography component="p">
                  Browse my gallery of images, showcasing various projects of mine from painting to programming, as well
                  as shots of me and my life
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" component={GalleryLink}>
                Browse images
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item={true} xs={true}>
          <Card className={classes.card}>
            <CardActionArea component="a" href="https://www.github.com/chrisdopuch" target="_blank">
              <CardMedia className={classes.media} image={gitmoar} title="Social Media" />
              <CardContent>
                <Typography gutterBottom={true} variant="h5" component="h2">
                  Connect With Me
                </Typography>
                <Typography component="p">
                  Interested in getting to know me? You can find me on a variety of social media platforms both personal
                  and professional - come by and say hello!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                target="blank"
                component="a"
                href="https://www.linkedin.com/in/chris-dopuch-99579383/"
              >
                LinkedIn
              </Button>
              <Button
                size="small"
                color="primary"
                target="blank"
                component="a"
                href="https://www.github.com/chrisdopuch"
              >
                Github
              </Button>
              <Button
                size="small"
                color="primary"
                target="blank"
                component="a"
                href="https://facebook.com/chris.dopuch"
              >
                Facebook
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(stylesDeclarations, { withTheme: true })(withRouter(Home));
