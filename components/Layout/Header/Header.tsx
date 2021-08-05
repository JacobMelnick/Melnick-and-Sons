import React from "react";
import Link from "next/link";
import Image from "next/image";
import { styled } from "@material-ui/core/styles";
import { Grid, Stack, Typography } from "@material-ui/core";

const PREFIX = "MyCard";

const classes = {
  root: `${PREFIX}-root`,
};

const Root = styled("div")((theme) => ({
  [`&.${classes.root}`]: {
    height: 200,
    width: "100vw",
    background: "#fff",
  },
}));

const Header = () => (
  <Root className={classes.root}>
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Grid item xs={12}>
        <Image
          src="/images/logos/melnickHouse1.jpg"
          height={150}
          width={320}
          alt="Melnick and Sons"
        />
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" spacing={5}>
          <Typography variant="h5" color="inherit">
            <Link href="/">
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                  opacity: ".60",
                }}
              >
                Home
              </a>
            </Link>
          </Typography>
          <Typography variant="h5" color="inherit">
            <Link href="/paintSelection/paintSelection">
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                  opacity: ".60",
                }}
              >
                Paint Selection
              </a>
            </Link>
          </Typography>
          <Typography variant="h5" color="inherit">
            <Link href="/portfolio/portfolio">
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                  opacity: ".60",
                }}
              >
                Portfolio
              </a>
            </Link>
          </Typography>
          <Typography variant="h5" color="inherit">
            <Link href="/testimonials/testimonials">
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                  opacity: ".60",
                }}
              >
                Testimonials
              </a>
            </Link>
          </Typography>
          <Typography variant="h5" color="inherit">
            <Link href="/contactUs/contactUs">
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                  opacity: ".60",
                }}
              >
                Contact Us
              </a>
            </Link>
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  </Root>
);

export default Header;
