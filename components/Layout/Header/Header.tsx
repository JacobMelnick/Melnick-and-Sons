import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { styled } from "@material-ui/core/styles";
import { Grid, Stack, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  headers: {
    color: 'blue',
    // "&:hover": {
    //   opacity: 30,
    // },
  },
}),
{ name: "MuiExample_Component" }
)

const PREFIX = "MyCard";

const classes = {
  root: `${PREFIX}-root`,
};

const Root = styled("div")((theme) => ({
  [`&.${classes.root}`]: {
    // height: 200,
    width: "100vw",
    background: "#fff",
  },
  
}));

const Header = (props) => {
  const [clicked, setClicked] = useState(0);
  console.log(clicked);
  const classHeaders = useStyles(props);

  const wasClicked = (e) => {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === "Home") {
      setClicked(1);
    } else if (e.target.innerHTML === "Paint Selection") {
      setClicked(2);
    } else if (e.target.innerHTML === "Portfolio") {
      setClicked(3);
    } else if (e.target.innerHTML === "Testimonials") {
      setClicked(4);
    } else if (e.target.innerHTML === "Contact Us") {
      setClicked(5);
    }
  };

  return (
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
            <Typography variant="h5" className={classHeaders.headers}>
              <Link href="/">
                <a
                  onClick={(e) => {
                    wasClicked(e);
                  }}
                  style={{
                    textDecoration: "none",
                    color: clicked === 1 ? "red" : "black",
                    opacity: ".70",
                  }}
                >
                  Home
                </a>
              </Link>
            </Typography>
            <Typography variant="h5" color="inherit">
              <Link href="/paintSelection/paintSelection">
                <a
                  onClick={(e) => {
                    wasClicked(e);
                  }}
                  style={{
                    textDecoration: "none",
                    color: clicked === 2 ? "red" : "black",
                    opacity: ".70",
                  }}
                >
                  Paint Selection
                </a>
              </Link>
            </Typography>
            <Typography variant="h5" color="inherit">
              <Link href="/portfolio/portfolio">
                <a
                  onClick={(e) => {
                    wasClicked(e);
                  }}
                  style={{
                    textDecoration: "none",
                    color: clicked === 3 ? "red" : "black",
                    opacity: ".70",
                  }}
                >
                  Portfolio
                </a>
              </Link>
            </Typography>
            <Typography variant="h5" color="inherit">
              <Link href="/testimonials/testimonials">
                <a
                  onClick={(e) => {
                    wasClicked(e);
                  }}
                  style={{
                    textDecoration: "none",
                    color: clicked === 4 ? "red" : "black",
                    opacity: ".70",
                  }}
                >
                  Testimonials
                </a>
              </Link>
            </Typography>
            <Typography variant="h5" color="inherit">
              <Link href="/contactUs/contactUs">
                <a
                  onClick={(e) => {
                    wasClicked(e);
                  }}
                  style={{
                    textDecoration: "none",
                    color: clicked === 5 ? "red" : "black",
                    opacity: ".70",
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
};

export default Header;
