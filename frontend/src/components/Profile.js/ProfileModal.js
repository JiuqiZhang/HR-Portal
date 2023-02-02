import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import { FormControl, FormLabel } from '@mui/material';

export default function ProfileModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // let firstName;
  // let middleName;
  // let lastName;
  // let address;
  // let phoneNum;
  // let carMake;
  // let carModel;
  // let carColor;
  // let ssn;
  // let dateOfBirth;
  // let visa;
  // let emerFirstName;
  // let emerMiddleName;
  // let emerLastName;
  // let emerPhone;
  // let emerEmail;

  const employeeInfo = [
    "firstName",
    "middleName",
    "lastName",
    "address",
    "phoneNum",
    "carMake",
    "carModel",
    "carColor",
    "ssn",
    "dateOfBirth",
    "visa",
    "emerFirstName",
    "emerMiddleName",
    "emerLastName",
    "emerPhone",
    "emerEmail"
  ]

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        View
      </Button>
      <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose}>
        <DialogTitle>Employee Profile</DialogTitle>
        <DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={1}>
              {employeeInfo.map((value) => (
                <FormControl>
                  <FormLabel>{value}</FormLabel>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    fullWidth
                    variant="outlined"
                  />
                </FormControl>
              ))}

              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
              </DialogActions>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>
    </div >
  );
}