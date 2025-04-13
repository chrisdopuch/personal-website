import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

const stylesDeclarations = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 1200,
      margin: '0 auto',
      paddingBottom: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit * 3,
      ...theme.mixins.gutters(),
    },
    iframe: {
      width: '100%',
      height: 'calc(100vh - 250px)', // Adjusted to account for button
      border: 'none',
      overflow: 'hidden',
      display: 'block',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing.unit * 2,
    },
    downloadButton: {
      margin: theme.spacing.unit,
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
  });

interface IResumeProps extends WithStyles<typeof stylesDeclarations> {}

const Resume: React.SFC<IResumeProps> = ({ classes }) => {
  return (
    <Paper className={classes.root} elevation={1}>
      <iframe
        className={classes.iframe}
        src="https://docs.google.com/document/d/e/2PACX-1vT1oUmAOKHkEg32G__smNsao9o9dpSCDMP_r_0bn31fzn7T8PCMUVI9GK_yUE7u0tpNbYBA4REY2BNq/pub?embedded=true"
        title="Resume"
        scrolling="no"
      />
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          className={classes.downloadButton}
          href="https://docs.google.com/document/d/1-6gNgAamghiqCgwTEmZ9a_sAp8qEwZf_q7MFfLydoKk/export?format=pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Chris_Dopuch_Resume.pdf"
        >
          <GetAppIcon className={classes.leftIcon} />
          Download Resume
        </Button>
      </div>
    </Paper>
  );
};

export default withStyles(stylesDeclarations, { withTheme: true })(Resume);
