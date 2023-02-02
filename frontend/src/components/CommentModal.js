import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import { FormControl, FormLabel } from '@mui/material';

export default function CommentModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        View
      </Button>
      <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose}>
        <DialogTitle>Share your thoughts</DialogTitle>
        <DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Comment</FormLabel>
                <TextField
                  autoFocus
                  margin="dense"
                  id="outlined-multiline-static"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={6}
                />
              </FormControl>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Post Comment</Button>
              </DialogActions>
            </Stack>
          </form>
          <Typography variant="subtitle1" component="div">
            All Comments
          </Typography>
          <Typography variant="subtitle1" component="div">
            This is a comment - Posted by Jane
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}