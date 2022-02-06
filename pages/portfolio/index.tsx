import Layout from "../../components/Layout/Layout";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import MelnickPhoto from "./MainHouses/MelnickHome/MelnickPhoto";
import WilhelmPhoto from "./MainHouses/Wilhelm/WilhelmPhoto";
import CoupevillePhoto from "./MainHouses/Coupeville/CoupevillePhoto";
import { SanityClient } from "../../services/SanityClient";
import JobCard from "../../components/JobCard/JobCard";
import { log } from "console";
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
    },

    firstImage: {
      position: "absolute",
      backgroundImage: 'url("/images/melnickHouse/melnickHouse15.jpg")',
      backgroundRepeat: "no-Repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "15%",
    },
  }),
  { name: "MuiExample_Component" }
);
type portfolioProps = {
  jobs: Job;
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.

  const jobs = await SanityClient.fetch(`*[_type == 'Job']{
    _id,
    JobName,
    slug,
    Featured,
    Description,
    images[]{
      asset->
    }
  }`);

  return {
    props: {
      jobs: jobs,
    },
  };
}

const portfolio: React.FC<portfolioProps> = ({ jobs }) => {
  const classes = useStyles();
  const featuredJobs = jobs.filter((job) => job.Featured);

  const restJobs = jobs.filter((job) => !job.Featured);

  return (
    <Layout>
      <Grid className={classes.root}>
        <div className={classes.rootImage}>
          <div className={classes.background}>
            <Grid
              container
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

              <Grid container spacing={4} item xs={12} md={9} margin="40px">
                {featuredJobs.map((job: any) => (
                  <Grid container item xs={12} md={6} lg={4} key={job._id}>
                    <JobCard
                      name={job.JobName}
                      key={job._id}
                      image={job.images[0].asset.url}
                      slug={job.slug.current}
                      featured={job.Featured}
                      description={job.Description}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </div>
        </div>

        <Grid
          item
          xs={12}
          md={9}
          lg={12}
          textAlign="center"
          justifyContent="center"
        >
          <Typography style={{ fontSize: 24, paddingBottom: "2%", fontWeight: 300 }}>
            Residential or commercial, big or small, Melnick & Son’s has you
            covered and our portfolio of work has grown to the point where it
            speaks for itself.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={9}
          lg={12}
          textAlign="center"
          justifyContent="center"
        >
          <Typography style={{ fontSize: 28, paddingBottom: "2%", textDecoration: 'underLine' }}>
            All Our Jobs
          </Typography>
        </Grid>

        <Grid container spacing={4} item xs={12} md={12} lg={12}>
          {restJobs.map((job: any) => (
            <Grid container item xs={12} md={6} lg={4} key={job._id}>
              <JobCard
                name={job.JobName}
                key={job._id}
                image={job.images[0].asset.url}
                slug={job.slug.current}
                featured={job.Featured}
                description={job.Description}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default portfolio;
