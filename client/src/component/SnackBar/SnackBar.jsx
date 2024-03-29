import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function PositionedSnackbar({open = false}) {
  const [shouldOpen, setShouldOpen] = React.useState(open);

  React.useEffect(() => {
    setShouldOpen(open);
  },[open]);

  const handleClose = () => {
    setShouldOpen(false);
  };

  return (
    <Box>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: "center" }}
        open={shouldOpen}
        onClose={handleClose}
        message="Notification send Our Acadimac Person Contact Soon"
        key={"top" + "center"}
        autoHideDuration={5000}
      />
    </Box>
  );
}