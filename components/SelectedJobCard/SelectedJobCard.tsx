import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { NextLinkComposed } from "../../components/Link/Link";
import Button from "@material-ui/core/Button";
import JobImages from "./JobImages";

const useStyles = makeStyles(
  (theme) => ({
    root: {
    },
    background: {
      backgroundRepeat: "no-Repeat",
      backgroundSize:  'cover',
      backgroundPosition: "center",
      width: "100%",
      height: "90%",
    },
    rootImage: {
      display: "flex",
      position: "relative",
      width: "100vw",
      height: 600,
    },
    imageText: {
      width: "100vw",
      justifyContent: "center",
      fontSize: "40px",
      color: "white",
      alignItems: "center",
      fontWeight: 600,
    },
  }),
  { name: "MuiExample_Component" }
);

type JobCardProps = {
  name: string;
  image: string;
  featured: boolean;
  description: string;
  restOfImages: string[];
};

const JobCard: React.FC<JobCardProps> = ({
  image,
  name,
  featured,
  restOfImages,
  description,
}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <div className={classes.rootImage}>
        <div
          className={classes.background}
          style={{ backgroundImage: `url(${image})` }}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={1}
          >
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <div className={classes.imageText}>
                  <div
                    style={{
                        padding: 10,
                        textAlign: "center",
                       
                      backgroundColor: "rgba(000, 0, 0, 0.4)",
                    }}
                  >
                    {name}
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>

      <Grid container spacing={4} item xs={12} md={9} lg={12} margin="20px">
        {restOfImages.map((image: any) => (
          <JobImages image={image} key={image} />
        ))}
      </Grid>
    </Grid>
  );
};

export default JobCard;
