import React from "react";
import Layout from "../components/Layout/Layout";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      paddingTop: "3%",
    },
    trucks: {
      backgroundImage: 'url("/images/logos/TrucksHome.jpg")',
      backgroundRepeat: "no-Repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: 542,
    },
  }),
  { name: "MuiExample_Component" }
);

type contactUsProps = {};

const contactUs: React.FC<contactUsProps> = (props) => {
  const classes = useStyles(props);

  return (
    <Layout>
      <Grid className={classes.root} container>
        <Grid container item lg={6} md={8} xs={10} direction="column">
          <Grid
            container
            direction="row"
            spacing={6}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12}>
              <Typography
                variant="h2"
                style={{
                  fontWeight: 600,
                  textAlign: "center",
                  fontFamily: "Montserrat",
                  fontSize: 48,
                  letterSpacing: 3,
                  lineHeight: "1.3em",
                }}
              >
                CONTACT US
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 600,
                  textAlign: "center",
                  fontFamily: "Montserrat",
                }}
              >
                <LocationOnIcon></LocationOnIcon>
                Address
              </Typography>
              <Typography
                variant="h5"
                style={{ fontWeight: 200, fontSize: 18, textAlign: "center" }}
              >
                754 SW 1st Avenue, Oak Harbor, Washington 98277
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 600,
                  textAlign: "center",
                  fontFamily: "Montserrat",
                }}
              >
                <LocalPhoneIcon style={{marginRight: '8px'}}></LocalPhoneIcon>

                Phone
              </Typography>
              <Typography
                variant="h5"
                style={{ fontWeight: 200, fontSize: 18, textAlign: "center" }}
              >
                (360) 929-6994
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 600,
                  textAlign: "center",
                  fontFamily: "Montserrat",
                }}
              >
                <EmailIcon style={{marginRight: '8px'}}></EmailIcon>
                Email
              </Typography>
              <Typography
                variant="h5"
                style={{ fontWeight: 200, fontSize: 18, textAlign: "center" }}
              >
                Melnick90@comcast.net
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={4} md={8} lg={12} >
            <div className={classes.trucks}></div>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default contactUs;
