import { Box, CircularProgress, makeStyles } from '@material-ui/core';

interface LoadingSpinnerProps {
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
    <Box
      width="1"
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={classes.container}
    >
      <CircularProgress />
    </Box>
  );
};
LoadingSpinner.defaultProps = {
  fullHeight: false,
};
export default LoadingSpinner;
