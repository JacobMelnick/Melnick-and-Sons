import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import { log } from "util";

const useStyles = makeStyles(
  (theme) => ({
    root: {},
    card: {
    //   width: "80%",
    //   paddingLeft: "4%",
      height: 300,
    },
   
  }),
  { name: "MuiExample_Component" }
);

type JobCardProps = {
    name: string;
    image: string;
    slug: string;
};

const JobCard: React.FC<JobCardProps> = ({ image, name, slug }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Card className={classes.card}>
            <Grid container spacing={2}>

            <Grid item xs={12}>
              <CardMedia component="img" height="194" image={image} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant={"h6"}>{name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant={"h5"} style={{ fontSize: 15 }}>
                Click here to see details
              </Typography>
            </Grid>
            </Grid>
        </Card>
    </div>
  );
};

export default JobCard;
