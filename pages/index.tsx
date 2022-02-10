import Layout from "../components/Layout/Layout";
import { makeStyles } from "@material-ui/styles";
import { Grid, Stack, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import Link from "next/link";

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
    paintButton: {
      border: "3px solid #2ea3f2",
      maxWidth: "200px",
      maxHeight: "60px",
      minWidth: "200px",
      minHeight: "60px",
      fontSize: 18,
      fontWeight: 240,
      '& .paintButton' : {
        overflow: 'hidden',
        width: 0,
        color: "#fff",
        transition: 'all .5s',
        marginLeft: 10
      },
      "&:hover": {
        border: 0,
        "& .paintButton": {
          display: 'initial',
          color: '#2ea3f2',
          width: 'initial'
        }
      },

    },
    contact: {
      border: "3px solid #2ea3f2",
      maxWidth: "200px",
      maxHeight: "60px",
      minWidth: "200px",
      minHeight: "60px",
      fontSize: 18,
      fontWeight: 240,
      '& .contactButton' : {
        overflow: 'hidden',
        width: 0,
        color: "#fff",
        transition: 'all .5s',
        marginLeft: 10
      },
      "&:hover": {
        border: 0,
        "& .contactButton": {
          display: 'initial',
          color: '#2ea3f2',
          width: 'initial'
        }
      },
    },
    sherwin: {
      backgroundImage: 'url("/images/logos/Sherwin.png")',
      backgroundRepeat: "no-Repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      height: 300,
      maxWidth: '100%'
    },
    truckHome: {
      backgroundImage: 'url("/images/logos/TrucksHome.jpg")',
      backgroundRepeat: "no-Repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100vw",
      height: 400,
      paddingTop: 195,
      paddingBottom: 242,
    },
  }),
  { name: "MuiExample_Component" }
);

export default function Home(props) {
  const classes = useStyles(props);

  return (
    <Layout>
      <Grid className={classes.root} container>
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
        <Grid item xs={12} md={8} lg={12} style={{ paddingTop: "5%" }}>
          <Stack direction="column" spacing={3} alignItems="center">
            <Typography variant="h2" style={{ fontWeight: 530 }}>
              What We Do
            </Typography>
            <Typography
              variant="h5"
              style={{ width: "40%", textAlign: "center", fontWeight: 300, fontSize: 18, lineHeight: '1.8em' }}
            >
              At Melnick & Son’s, we believe in superior craftsmanship and
              customer satisfaction above all else. We are a licensed, bonded
              Painting Contractor dedicated to serving the Whidbey Island
              community.
            </Typography>
          </Stack>
        </Grid>
        <Grid
          container
          // item
          spacing={1}
          xs={12}
          justifyContent="center"
          alignItems="flex-start"
          style={{ paddingBottom: "5%", paddingTop: "3%" }}
        >
          <Grid item xs={12} md={6} lg={4} container spacing={2} >
            <Grid item xs={12}>
              <Typography
                variant="h6"
                style={{ fontWeight: 550, textAlign: "center" }}
              >
                Our Experience
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 300,
                  textAlign: "center",
                  fontSize: 18,
                  padding: "0px 20px"
                }}
              >
                Since 2009, we’ve completed over 350 jobs for various local
                businesses, family homes and more. Our painters have more than
                30 years of experience will all types of products and finishes
                and are dedicated to bringing you a quality paint job, inside
                and out.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                style={{ fontWeight: 550, textAlign: "center" }}
              >
                The Community
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 300,
                  textAlign: "center",
                  fontSize: 18,
                  padding: "0px 20px"

                }}
              >
                As a local, family owned business, we are passionate about
                providing the absolute best for the community. We’ve been
                resident’s ourselves for the past 40 years and thoroughly enjoy
                every opportunity to improve the area.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                style={{ fontWeight: 550, textAlign: "center" }}
              >
                Contact Us to Learn More
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 300,
                  textAlign: "center",
                  fontSize: 18,
                  padding: "0px 20px"

                }}
              >
                For more information on our services, please visit our contact
                page. We have several expert staff members who are ready and
                willing to provide you will all of the knowledge you may need,
                along with a free painting estimate and personalized project
                assessment.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12}  style={{ paddingBottom: "4%" }}>
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
                  color: "white",
                  height: "20%",
                  marginLeft: '10%'

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
                  marginLeft: '10%'
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
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={4}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              style={{
                fontWeight: 800,
                textAlign: "center",
                // paddingBottom: "1%",
              }}
            >
              Partners
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.sherwin}></div>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              style={{ textAlign: "center", fontSize: 25, fontWeight: 240 }}
            >
              Visit the Sherwin Williams Color Finder to help you with your next
              paint selection.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ textAlign: "center", paddingBottom: "4%" }}
          >
            <Link href="paint-selection">
              <Button className={classes.paintButton}>
                Color Finder
                <ArrowForwardIosIcon className={'paintButton'}></ArrowForwardIosIcon>
              </Button>
            </Link>
          </Grid>
        </Grid>
        <div className={classes.truckHome}></div>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={5}
          marginTop="3%"
        >
          <Grid item xs={12}>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              About Us
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={10}>
            <Typography
              variant="h6"
              style={{ textAlign: "center", fontWeight: 300 }}
            >
              In 2009, after years in landscaping, Todd Melnick founded Melnick
              & Son’s with the goal of providing quality painting services for
              the Whidbey Island community and surrounding areas. Since then,
              we’ve expanded our work to include indoor and outdoor paint jobs,
              deck and stain work.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ textAlign: "center", paddingBottom: "5%" }}
          >
            <Link href="/contact-us">
              <Button size="large" className={classes.contact}>
                Contact Us
                <ArrowForwardIosIcon className='contactButton'></ArrowForwardIosIcon>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
