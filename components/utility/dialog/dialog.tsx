import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Banner from '../banner/Banner';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Section from '../section/Section';
import Card from '../card/Card';
import { getMovie } from '../../../api/movieApi';
import { IMovie } from '../../../types/IMovie';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickOpen}>
        <Card title="Movie" description="Some description" />
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Banner title="Movie" description="Some movie description" />
        <DialogContent>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <DialogTitle>Blockbuster</DialogTitle>
              <DialogContentText className="px-5 pb-5">
                After learning he is managing the last Blockbuster Video in
                America, Timmy and his employees fight to stay afloat.
              </DialogContentText>
            </Grid>
            <Grid xs={4}>
              <div className="d-flex my-4">
                <Button
                  className="mr-2"
                  variant="outlined"
                  onClick={handleClose}
                >
                  Watch
                </Button>
                <Button variant="outlined" onClick={handleClose}>
                  Close
                </Button>
              </div>
              <DialogContentText>
                Genre: <b>Comedy</b>
              </DialogContentText>
              <DialogContentText>
                Duration: <b>2h 30m</b>
              </DialogContentText>
            </Grid>
          </Grid>
          {/* <Divider />
          <Section title="More Like This" /> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
