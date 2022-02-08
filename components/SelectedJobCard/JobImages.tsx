import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { Card, CardMedia, Typography } from "@material-ui/core";
import Modal from "../Modal/Modal";

const useStyles = makeStyles(
  (theme) => ({
    root: {},
    card: {
      "&:hover": {
        opacity: 0.8,
        cursor: "pointer",
      },
      padding: 10,
    },
  }),
  { name: "MuiExample_Component" }
);

const JobImages = ({ image }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleClose = (e) => {
    setOpen(!open);
    setSelectedPhoto(e.target.src);
  };

  return (
    <Grid container spacing={4}  item xs={12} md={9} lg={8} marginLeft="13%" >
      {image.map((image: any) => (
        <Grid
          item
          xs={9}
          lg={4}
          md={8}
          onClick={(e) => {
            handleClose(e);
          }}
          key={image.asset._id}
        >
          {open && (
            <Modal
              handleClose={handleClose}
              image={image}
              selectedPhoto={selectedPhoto}
            />
          )}
          <Card
            className={classes.card}
            key={image.asset._id}
            variant="outlined"
          >
            <CardMedia component="img" height="150" image={image.asset.url} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default JobImages;
