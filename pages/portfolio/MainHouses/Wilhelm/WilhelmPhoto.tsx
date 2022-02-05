import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: "relative",
    },
    firstImage: {
      position: "absolute",
      backgroundImage: 'url("/images/melnickHouse/melnickHouse15.jpg")',
      backgroundRepeat: "no-Repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "15%",
    },
    card: {
      width: "80%",
      paddingLeft: "4%",
      height: 250,
    },
  }),
  { name: "MuiExample_Component" }
);

type WilhelmPhoto = {};

const WilhelmPhoto: React.FC<WilhelmPhoto> = (props) => {
  const classes = useStyles(props);
  return (
    <Card className={classes.card}>
      <Grid container item xs={12} direction="column" spacing={3}>
        <Grid item xs={4}>
          <div className={classes.firstImage}></div>
        </Grid>
        <Grid item xs={4}>
          <Typography variant={"h5"}>The Melnick Home</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant={"h5"} style={{ fontSize: 15 }}>
            One of our best jobs, which consisted painting our own family home
            inside and out!
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant={"h5"} style={{ fontSize: 15 }}>
            Click here to see details
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default WilhelmPhoto;
