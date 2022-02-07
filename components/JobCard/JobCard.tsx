import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { NextLinkComposed } from "../../components/Link/Link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(
  (theme) => ({
    root: {},
    card: {
      width: "80%",
      margin: "8%",
      height: 300,
      paddingLeft: 13,
      paddingRight: 13,
      paddingTop: 13,
      paddingBottom: 13,
    },
    hyperLink: {
      textDecoration: "none",
      color: "#5b92e5",
      fontSize: 13,
      "&:hover": {
        color: "#ace5ee",
        cursor: "pointer",
      },
    },
    FeatureCard: {
      width: "80%",
      margin: "2%",
      height: 300,
      paddingLeft: 13,
      paddingRight: 13,
      paddingTop: 13,
    },
  }),
  { name: "MuiExample_Component" }
);

type JobCardProps = {
  name: string;
  image: string;
  slug: string;
  featured: boolean;
  description: string;
};

const JobCard: React.FC<JobCardProps> = ({
  image,
  name,
  slug,
  featured,
  description,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {featured && (
        <Card className={classes.FeatureCard}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <CardMedia component="img" height="150" image={image} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant={"h6"}>{name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant={"h6"}
                style={{ fontSize: 12, fontWeight: 340 }}
              >
                {description}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="text"
                size="small"
                component={NextLinkComposed}
                to={`/portfolio/${slug}`}
              >
                Click To See Details
              </Button>
            </Grid>
          </Grid>
        </Card>
      )}
      {!featured && (
        <Card className={classes.card}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CardMedia component="img" height="194" image={image} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant={"h6"} style={{ paddingLeft: 5 }}>
                {name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="text"
                size="small"
                component={NextLinkComposed}
                to={`/portfolio/${slug}`}
              >
                Click To See Details
              </Button>
            </Grid>
          </Grid>
        </Card>
      )}
    </div>
  );
};

export default JobCard;
