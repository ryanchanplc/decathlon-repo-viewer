import { makeStyles, Typography, Grid, Theme, Link } from '@material-ui/core';

export interface IconTextProps {
  /**
   * Icon to describe the text
   */
  icon: React.ReactNode;

  /**
   *  display text
   */
  text?: string;

  /**
   *  url if it has a link
   */
  url?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex',
    marginLeft: theme.spacing(0.25),
  },
}));

const IconText = (props: IconTextProps): JSX.Element => {
  const { icon, text, url } = props;
  const classes = useStyles();

  return (
    <Grid container direction="row" wrap="nowrap">
      <Grid item>{icon}</Grid>
      <Grid item>
        <Typography variant="subtitle1" className={classes.wrapIcon}>
          {url && text && (
            <Link href={url} color="inherit" target="_blank">
              {text}
            </Link>
          )}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default IconText;
