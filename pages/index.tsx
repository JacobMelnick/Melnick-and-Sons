import Layout from "../components/Layout/Layout";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Grid, Stack, Typography } from "@material-ui/core";
import { Height } from "@material-ui/icons";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: "relative",
      height: "100%",
    },
    rootImage: {
      display: "flex",
      position: "relative",
      width: "100vw",
      height: 600,
      marginTop: "1%",
    },
    photo: {
      position: "absolute",
      backgroundImage: 'url("/images/melnickHouse/melnickHouse15.jpg")',
      backgroundRepeat: "no-Repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100vw",
      height: 600,
      paddingTop: 195,
      paddingBottom: 242,
    },
    firstHouse: {
      // position: "absolute",
      backgroundImage: 'url("/images/logos/MainPageHouse1.jpg")',
      backgroundRepeat: "no-Repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "50vw",
      height: 600,
    },
    imageText: {
      position: "absolute",
      height: "200px",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      fontSize: "30px",
      color: "white",
      alignItems: "center",
      fontWeight: 600,
    },
    services: {
      backgroundColor: "black",
      width: "60%",
      opacity: ".90",
      display: "flex",
      justifyContent: "center",
    },
  }),
  { name: "MuiExample_Component" }
);

export default function Home(props) {
  const classes = useStyles(props);
  return (
    <Layout>
      <Grid
        className={classes.root}
        container
        spacing={1}
        direction="column"
        rowSpacing={1}
      >
        <div className={classes.rootImage}>
          <div className={classes.photo}>
            <div className={classes.imageText}>
              <div
                style={{
                  padding: 20,
                  backgroundColor: "rgba(000, 0, 0, 0.2)",
                }}
              >
                Painting Just Got A Whole Lot Easier
              </div>
            </div>
          </div>
        </div>
        <Grid item xs={12} style={{ marginTop: "5%" }}>
          <Stack direction="column" spacing={4} alignItems="center">
            <Typography variant="h2" style={{ fontWeight: 530 }}>
              What We Do
            </Typography>
            <Typography
              variant="h5"
              style={{ width: "28%", textAlign: "center" }}
            >
              At Melnick & Son’s, we believe in superior craftsmanship and
              customer satisfaction above all else. We are a licensed, bonded
              Painting Contractor dedicated to serving the Whidbey Island
              community.
            </Typography>
          </Stack>
          <Grid item xs={12} style={{ marginTop: "2%" }}>
            <Stack direction="row" justifyContent="space-Evenly" spacing={1}>
              <Typography
                variant="h6"
                style={{ fontWeight: 550, textAlign: "center" }}
              >
                Our Experience
              </Typography>
              <Stack direction='row'>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 300,
                  width: "15%",
                  textAlign: "center",
                  fontSize: 18,
                }}
              >
                Since 2009, we’ve completed over 350 jobs for various local
                businesses, family homes and more. Our painters have more than
                30 years of experience will all types of products and finishes
                and are dedicated to bringing you a quality paint job, inside
                and out.
              </Typography>
              </Stack>

              <Typography
                variant="h6"
                style={{ fontWeight: 550, textAlign: "center" }}
              >
                The Community
              </Typography>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 300,
                  width: "15%",
                  textAlign: "center",
                  fontSize: 18,
                }}
              >
                As a local, family owned business, we are passionate about
                providing the absolute best for the community. We’ve been
                resident’s ourselves for the past 40 years and thoroughly enjoy
                every opportunity to improve the area.
              </Typography>
              <Typography
                variant="h6"
                style={{ fontWeight: 550, textAlign: "center" }}
              >
                Contact Us to Learn More
              </Typography>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 300,
                  width: "15%",
                  textAlign: "center",
                  fontSize: 18,
                }}
              >
                For more information on our services, please visit our contact
                page. We have several expert staff members who are ready and
                willing to provide you will all of the knowledge you may need,
                along with a free painting estimate and personalized project
                assessment.
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              // alignItems="center",
              justifyContent="space-Evenly"
              style={{ marginTop: ".5%" }}
            ></Stack>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row">
            <div className={classes.firstHouse}></div>
            <Stack
              direction="column"
              className={classes.services}
              spacing={0.5}
            >
              <Typography
                variant="h4"
                style={{
                  fontWeight: 700,
                  textAlign: "center",
                  color: "white",
                  marginRight: "54%",
                  height: "20%",
                }}
              >
                List of Services
              </Typography>
              <Typography
                variant="h6"
                style={{
                  fontWeight: 500,
                  color: "white",
                  width: "75%",
                  marginLeft: "15%",
                }}
              >
                Color Consulting, Custom Painting Finish, Deck Staining &
                Painting, Services, Deck Weatherproofing, Decorative Painting,
                Drywall Installation, Drywall Repair, Drywall Texturing, Enamel
                Work, Exterior Painting, Faux Painting, Interior Painting,
                Interior Plastering, Lead Paint, Inspection, Mural Painting,
                Paint Removal, Painting, Plaster Repair, Plastering, Popcorn
                Ceiling Removal, Small Painting Projects, Staining & Sealing,
                Stucco, Stucco Construction, Texture, Painting, Trim Work,
                Wallpaper Removal, Wallpapering, Wood Finishing, Wood Staining.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Layout>
  );
}
