import React, { useContext } from 'react';
import { Snackbar, SnackbarContent } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { SnackBarContext } from '../../context/SnackBarContextProvider';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackBarWrapper = () => {
  const { snackBarOpen, snackBarMessage, severity, closeSnackBar } =
    useContext(SnackBarContext);

  return (
    <Snackbar
      open={snackBarOpen}
      onClose={closeSnackBar}
      autoHideDuration={5000}
    >
      <Alert onClose={closeSnackBar} severity={severity} sx={{ width: '100%' }}>
        {snackBarMessage}
      </Alert>
    </Snackbar>
  );
};
