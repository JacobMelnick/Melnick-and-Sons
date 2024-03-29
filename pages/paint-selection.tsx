import Layout from "../components/Layout/Layout";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, Card } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: "relative",
      backgroundImage: 'url("/images/paintSelection/background.jpg")',
      backgroundRepeat: "no-Repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "calc(100vh - 225px)",
      opacity: 0.9,
    },

    smallIcon: {
      backgroundImage: 'url("/images/logos/Sherwin.png")',
      backgroundRepeat: "no-Repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      height: 200,
    },
    behr: {
      backgroundImage: 'url("/images/paintSelection/behr.jpg")',
      backgroundRepeat: "no-Repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      height: 180,
    },
  }),
  { name: "MuiExample_Component" }
);

const paintSelection = (props) => {
  const classes = useStyles(props);

  return (
    <Layout>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className={classes.root}
      >
        <Grid item xs={10} md={8} lg={6}>
          <Card style={{ padding: 30, marginTop: 20, marginBottom: 20 }}>
            <Grid container item xs={12} spacing={1}>
              <Grid
                container
                item
                xs={12}
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Typography
                  variant="h4"
                  style={{
                    textAlign: "center",
                    fontWeight: 350,
                    paddingTop: "5%",
                    fontFamily: "OpenSans",
                  }}
                >
                  Choosing A Paint
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  style={{
                    textAlign: "center",
                    fontWeight: 200,
                    fontSize: 29,
                    paddingBottom: "3%",
                    fontFamily: "OpenSans",
                  }}
                >
                  As painters, we make it our mission to select the best quality
                  paints for our customers. We’ve looked high and low to find
                  products that not only get the job done, but will continue to
                  look exceptional for years to come.
                </Typography>
              </Grid>
              <Grid container item xs={12} spacing={3}>
                <Grid item container xs={12} md={6}>
                  <Grid item xs={12}>
                    <div className={classes.smallIcon}></div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5" style={{ textAlign: "center" }}>
                      For those looking for the absolute best in painting
                      products, we highly recommend Sherwin Williams. They are
                      one of the oldest and largest painting companies in the
                      U.S. and are committed to the research and development of
                      brilliant, durable and long-lasting paint.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12} md={6}>
                <Grid item xs={12} >
                  <div className={classes.behr}></div>
                </Grid>
                  <Grid item xs={12} >
                    <Typography variant="h5" style={{ textAlign: "center" }}>
                      However, if you looking for other alternatives, Painter’s
                      Alley and Home Depot have some terrific brands available
                      for purchase. We have had great experiences working with
                      Benjamin Moore, Miller, and Behr Paints as well.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                justifyContent="center"
                alignItems="center"
                style={{ paddingTop: "8%", paddingBottom: "4%" }}
              >
                <Typography
                  variant="h5"
                  style={{ textAlign: "center", fontSize: 25 }}
                >
                  No matter what type of paint you prefer, we are committed to
                  providing the best services in the application of any product.
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default paintSelection;
