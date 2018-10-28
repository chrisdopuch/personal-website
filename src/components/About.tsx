import Paper from '@material-ui/core/Paper';
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';

const stylesDeclarations = (theme: Theme) => ({
  root: {
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    ...theme.mixins.gutters(),
  },
});

interface IAboutProps extends WithStyles<typeof stylesDeclarations> {}

class About extends Component<IAboutProps> {
  public render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
            Who is Chris Dopuch?
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(stylesDeclarations, { withTheme: true })(About);
