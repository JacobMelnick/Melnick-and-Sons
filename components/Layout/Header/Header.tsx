import React from "react";
import Link from "next/link";
import Image from "next/image";
import { styled } from "@material-ui/core/styles";
import { Grid, Stack } from "@material-ui/core";

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
        <Stack direction="row" spacing={2}>
          <Link href="/">Home</Link>

          <Link href="/paintSelection/paintSelection">Paint Selection</Link>

          <Link href="/portfolio/portfolio">Portfolio</Link>

          <Link href="/testimonials/testimonials">Testimonials</Link>

          <Link href="/contactUs/contactUs">Contact Us</Link>
        </Stack>
      </Grid>
    </Grid>
  </Root>
);

export default Header;
