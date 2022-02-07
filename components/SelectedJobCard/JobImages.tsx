import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { Card, CardMedia, Typography } from "@material-ui/core";
import Modal from "@mui/material/Modal";

const useStyles = makeStyles(
  (theme) => ({
    root: {},
    card: {
      "&:hover": {
        opacity: 0.8,
        cursor: "pointer",
      },
      padding: 10
    },
  }),
  { name: "MuiExample_Component" }
);

const JobImages = ({ image }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(true);
  };
  
  return (
    <Grid container spacing={4} item xs={12} md={9} lg={8} marginLeft="13%">
      {image.map((image: any) => (
        <Grid item xs={12} lg={4} md={8} onClick={handleClose} key={image.asset._id}>
          {/* {open &&
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
            </Modal> 
            } */}
          <Card className={classes.card}  key={image.asset._id} variant="outlined" >
            <CardMedia component="img" height="150" image={image.asset.url} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default JobImages;
