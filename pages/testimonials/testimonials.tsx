import React from "react";
import Layout from "../../components/Layout/Layout";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import Avatar from '@mui/material/Avatar';

type TestimonialsProps = {};

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: "relative",
      height: "100%",
      paddingTop: "3%",
    },
    card: {
      padding: "30px",
      backgroundColor: "#515151",
      width: "40%",
      color: "#fff",
      marginBottom: "1%",
      fontSize: 14,
    },

    winhelm: {
      backgroundImage: 'url("/images/testimonials/winhelm.jpg")',
      backgroundRepeat: "no-Repeat",
      backgroundSize: "100%",
      backgroundPosition: "center",
      height: 100,
      borderRadius: "90px",
    },
    cleef: {
      backgroundImage: 'url("/images/testimonials/cleef.jpg")',
      backgroundRepeat: "no-Repeat",
      backgroundSize: "100%",
      backgroundPosition: "center",
      height: 100,
      borderRadius: "100%",
    },
    moses: {
      backgroundImage: 'url("/images/testimonials/moses.jpg")',
      backgroundRepeat: "no-Repeat",
      backgroundSize: "100%",
      backgroundPosition: "center",
      height: 100,
      borderRadius: "90px",
    },
  }),
  { name: "MuiExample_Component" }
);

const Testimonials: React.FC<TestimonialsProps> = (props) => {
  const classes = useStyles(props);

  return (
    <Layout>
      <Grid
        container
        className={classes.root}
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Typography
          variant="h1"
          style={{
            fontSize: 30,
            fontWeight: 500,
            color: "#333",
            lineHeight: "1em",
            letterSpacing: 2,
            textAlign: "center",
            paddingBottom: "2%",
          }}
        >
          Our Testimonials:
        </Typography>
        <Card className={classes.card}>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={2} >
            <Avatar alt="winhelm" src="/images/testimonials/winhelm.jpg"  sx={{ width: 110, height: 110}} />
            </Grid>
            <Grid item xs={10}>
              <Typography style={{ paddingBottom: "2%" }}>
                “We told the manager at Sherwin Williams in Oak Harbor that we
                wanted to hire a top-quality painting contractor. He recommended
                several including Todd Melnick who called us back very quickly.
              </Typography>
              <Typography style={{ paddingBottom: "2%" }}>
                The job was to prepare and paint the exterior of our home, a
                guest house, and a detached garage plus several landscape
                features. To make sure Todd’s idea of quality workmanship was
                the same as ours we initially hired his company to refinish only
                the garage.
              </Typography>
              <Typography style={{ paddingBottom: "2%" }}>
                Todd Melnick easily passed our test. The quality of his work was
                OUTSTANDING! Todd and his crew went on to complete the entire
                project with the same fine work ethic and attention to detail
                they demonstrated on our garage. We are very happy to recommend
                him.”
              </Typography>
              <Typography style={{ fontWeight: 600 }}>
                Brett and Jan Wilhelm
              </Typography>
            </Grid>
          </Grid>
        </Card>
        <Card className={classes.card}>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={2}>
            <Avatar alt="winhelm" src="/images/testimonials/cleef.jpg"  sx={{ width: 110, height: 110}} />
            </Grid>
            <Grid item xs={10}>
              <Typography style={{ paddingBottom: "2%" }}>
                “Todd and his crew are professional, polite and efficient, I can
                always count on Melnick & Sons to use the finest materials to
                produce great results. We are happy to recommend them for a
                quality job.”
              </Typography>
              <Typography style={{ fontWeight: 600 }}>
                Yvonne Van Cleef, Island Property Management
              </Typography>
            </Grid>
          </Grid>
        </Card>
        <Card className={classes.card}>
          <Typography style={{ paddingBottom: "2%" }}>
            “My wife and I had the good fortune to hire Todd Melnick and his
            fantastic crew to paint the complete interior of our Whidbey Island
            home. Todd’s team was incredibly professional with attention to
            detail that surpassed our expectations. I would gladly recommend
            Melnick & Sons based on the overall price, quality, and follow-up.
            Two thumbs up — -although selfishly we don’t want him to get too
            busy so he will have time to paint the outside of our house next
            summer.”
          </Typography>
          <Typography style={{ fontWeight: 600 }}>
            Steve & Lisa Jackson
          </Typography>
        </Card>
        <Card className={classes.card}>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={2}>
            <Avatar alt="winhelm" src="/images/testimonials/moses.jpg"  sx={{ width: 110, height: 110}} />
            </Grid>
            <Grid item xs={10}>
              <Typography style={{ paddingBottom: "2%" }}>
                “Melnick & Sons recently painted the majority of the interior of
                our home, while we were in residence, so they had to contend
                with furniture and other belongings which needed to be
                protected. They were working with multiple colors and newly
                installed base trim and crown molding. They performed the work
                flawlessly and clearly worked to insure two things: outstanding
                results and very happy customers. They exceeded even our very
                critical standards on both counts. We will certainly ask them to
                do additional work for us and highly recommend their service to
                anyone in the market for great work at a reasonable price.“
              </Typography>
            <Typography style={{ fontWeight: 600 }}>Laurence Moses</Typography>
            </Grid>
          </Grid>
        </Card>
        <Card className={classes.card}>
          <Typography style={{ paddingBottom: "2%" }}>
            “I contacted three local painting contractors to get bids on
            painting the exterior of our home. Melnick and Sons was the company
            I chose based on Todd’s professional and personal demeanor. I
            believed his company would hold true to the attention to detail he
            guaranteed and the promise to arrive and finish on his estimated
            timeline. They did an excellent job on our home. And I am having
            them back this fall to paint the interior. Both Todd and crew are
            good people and easy to work with for any questions I had. I would
            recommend Melnick and Sons to anyone seeking a professional painting
            company. Couldn’t be happier.“
          </Typography>
          <Typography style={{ fontWeight: 600 }}> Pat Johnsen</Typography>
        </Card>
      </Grid>
    </Layout>
  );
};

export default Testimonials;
