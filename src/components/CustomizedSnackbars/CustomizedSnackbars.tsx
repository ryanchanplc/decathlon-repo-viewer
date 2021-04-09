import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { AppContext } from '../../context/AppContext';
import { clearError } from '../../context/Actions';

const Alert = (props: AlertProps): JSX.Element => (
  <MuiAlert elevation={6} variant="filled" {...props} />
);

const CustomizedSnackbars = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') return;
    clearError(dispatch);
  };

  return (
    <Snackbar open={!!state.error} onClose={handleClose}>
      <Alert severity="error" onClose={handleClose}>
        {state.error?.status} {state.error?.message} {state.error?.body}
      </Alert>
    </Snackbar>
  );
};

export default CustomizedSnackbars;
