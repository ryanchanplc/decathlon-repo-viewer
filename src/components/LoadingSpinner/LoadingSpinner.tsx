import {
  Grid,
  CircularProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';

interface LoadingSpinnerProps {
  /**
   *  the loading div occupy will full height of the viewport
   */
  // eslint-disable-next-line react/no-unused-prop-types
  fullHeight?: boolean;
}
const useStyles = makeStyles({
  container: {
    height: (props: LoadingSpinnerProps) =>
      props.fullHeight ? '100vh' : 'inherit',
  },
});

const LoadingSpinner = (props: LoadingSpinnerProps): JSX.Element => {
  const classes = useStyles(props);

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.container}
      spacing={2}
    >
      <Grid item>
        <CircularProgress />
      </Grid>
      <Grid item>
        <Typography variant="body2" component="span">
          Loading
        </Typography>
      </Grid>
    </Grid>
  );
};
LoadingSpinner.defaultProps = {
  fullHeight: false,
};
export default LoadingSpinner;
