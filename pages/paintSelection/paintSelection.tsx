import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import { makeStyles } from "@material-ui/styles";
import { Grid, Stack, Typography } from "@material-ui/core";
import { ClassNames } from "@emotion/react";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: "relative",
      height: "100%",
    },
    background: {
      position: "absolute",
      backgroundImage: 'url("/images/paintSelection/background.jpg")',
      backgroundRepeat: "no-Repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "90%",
      opacity: 0.9,
    },
    rootImage: {
      display: "flex",
      position: "relative",
      width: "100vw",
      height: 1100,
      paddingTop: "1%",
    },
    white: {
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      height: "80%",
      position: "absolute",
      display: "flex",
    },
  }),
  { name: "MuiExample_Component" }
);

const paintSelection = (props) => {
  const classes = useStyles(props);

  return (
    <Layout>
      <Grid container className={classes.root}>
        <div className={classes.rootImage}>
          <div className={classes.background}>
            <div className={classes.white}>
              <Grid container item xs={12}>
                <Grid item xs={12} direction="row" alignItems="center" justifyContent="center" spacing={2}>
                  <Typography variant="h4" style={{textAlign: 'center', fontWeight: 350}}>Choosing A Paint</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" style={{textAlign: 'center', fontWeight: 200}}>
                    As painters, we make it our mission to select the best
                    quality paints for our customers. We’ve looked high and low
                    to find products that not only get the job done, but will
                    continue to look exceptional for years to come.
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Grid>
    </Layout>
  );
};

export default paintSelection;
