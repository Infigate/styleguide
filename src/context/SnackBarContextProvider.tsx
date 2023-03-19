import React, { createContext, useState } from 'react';
import { AlertColor } from '@mui/material';

type SnackBarContextProps = {
  snackBarOpen: boolean;
  snackBarMessage: string;
  severity?: AlertColor;
  openSnackBar: (message: string, severity?: AlertColor) => void;
  closeSnackBar: () => void;
};

export const SnackBarContext = createContext<SnackBarContextProps>({
  snackBarOpen: false,
  snackBarMessage: '',
  severity: 'info',
  openSnackBar: () => {},
  closeSnackBar: () => {},
});

export const SnackBarContextProvider: React.FC<any> = ({ children }) => {
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);

  const openSnackBar = (message: string, severity?: AlertColor) => {
    setSnackBarOpen(true);
    setSnackBarMessage(message);
    setSeverity(severity);
  };

  const closeSnackBar = () => {
    setSnackBarOpen(false);
    setSnackBarMessage('');
  };

  const contextValue: SnackBarContextProps = {
    snackBarOpen,
    snackBarMessage,
    severity,
    openSnackBar,
    closeSnackBar,
  };

  return (
    <SnackBarContext.Provider value={contextValue}>
      {children}
    </SnackBarContext.Provider>
  );
};
