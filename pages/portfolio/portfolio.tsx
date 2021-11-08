import Layout from "../../components/Layout/Layout";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: "relative",
    },
    background: {
      position: "absolute",
      backgroundImage: 'url("/images/portfolio/portBack.jpg")',
      backgroundRepeat: "no-Repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "90%",
      opacity: 1.5,
      display: "flex",
    },
    rootImage: {
      display: "flex",
      position: "relative",
      width: "100vw",
      height: 700,
      paddingTop: "1%",
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
      paddingLeft: '4%',
      height: 250
    },
  }),
  { name: "MuiExample_Component" }
);
type portfolioProps = {};

const portfolio: React.FC<portfolioProps> = (props) => {
  const classes = useStyles(props);

  return (
    <Layout>
      <Grid className={classes.root}>
        <div className={classes.rootImage}>
          <div className={classes.background}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
              paddingLeft="10%"
            >
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Typography variant="h4" style={{ color: "white" }}>
                    Our Featured Jobs:
                  </Typography>
                </Grid>
              </Grid>

              <Grid container item xs={4}>
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
                        One of our best jobs, which consisted painting our own
                        family home inside and out!
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant={"h5"} style={{ fontSize: 15 }}>
                        Click here to see details
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>

              <Grid container item xs={4}>
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
                        One of our best jobs, which consisted painting our own
                        family home inside and out!
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant={"h5"} style={{ fontSize: 15 }}>
                        Click here to see details
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>

              <Grid container item xs={4}>
                <Card className={classes.card}>
                  <Grid item xs={12} container direction="column" spacing={3}>
                    <Grid item xs={4}>
                      <div className={classes.firstImage}></div>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant={"h5"}>The Melnick Home</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant={"h5"} style={{ fontSize: 15 }}>
                        One of our best jobs, which consisted painting our own
                        family home inside and out!
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant={"h5"} style={{ fontSize: 15 }}>
                        Click here to see details
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
    </Layout>
  );
};

export default portfolio;
