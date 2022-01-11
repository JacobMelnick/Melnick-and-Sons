import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { styled } from "@material-ui/core/styles";
import { Grid, Stack, Typography } from "@material-ui/core";
import { useRouter } from "next/router";

const PREFIX = "MyCard";

const classes = {
  root: `${PREFIX}-root`,
};

const Root = styled("div")((theme) => ({
  [`&.${classes.root}`]: {
    width: "100vw",
    background: "#fff",
  },
}));

const Header = () => {
  const router = useRouter();

  return (
    <Root className={classes.root}>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        style={{
          top: 0,
          // position: "fixed",
          background: "white",
          // zIndex: 1,
          boxShadow: "0 1px 0 rgb(0 0 0 / 10%)",
        }}
      >
        <Grid item xs={12}>
          <Image
            src="/images/logos/melnickHouse1.jpg"
            height={150}
            width={320}
            alt="Melnick and Sons"
          />
        </Grid>
        <Grid item xs={12} style={{ paddingBottom: "1%" }}>
          <Stack direction="row" spacing={5}>
            <Typography
              variant="h5"
              className={router.pathname == "/" ? "active" : ""}
            >
              <Link href="/">
                <a
                  style={{
                    textDecoration: "none",
                    color: router.pathname === "/" ? "red" : "black",
                    opacity: ".70",
                    fontFamily: "Open Sans",
                  }}
                >
                  Home
                </a>
              </Link>
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              className={
                router.pathname == "/paintSelection/paintSelection"
                  ? "active"
                  : ""
              }
            >
              <Link href="/paintSelection/paintSelection">
                <a
                  style={{
                    textDecoration: "none",
                    color:
                      router.pathname === "/paintSelection/paintSelection"
                        ? "red"
                        : "black",
                    opacity: ".70",
                    fontFamily: "Open Sans",
                  }}
                >
                  Paint Selection
                </a>
              </Link>
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              className={
                router.pathname == "/portfolio/portfolio" ? "active" : ""
              }
            >
              <Link href="/portfolio/portfolio">
                <a
                  style={{
                    textDecoration: "none",
                    color:
                      router.pathname === "/portfolio/portfolio"
                        ? "red"
                        : "black",
                    opacity: ".70",
                    fontFamily: "Open Sans",
                  }}
                >
                  Portfolio
                </a>
              </Link>
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              className={
                router.pathname == "/testimonials/testimonials" ? "active" : ""
              }
            >
              <Link href="/testimonials/testimonials">
                <a
                  style={{
                    textDecoration: "none",
                    color:
                      router.pathname === "/testimonials/testimonials"
                        ? "red"
                        : "black",
                    opacity: ".70",
                    fontFamily: "Open Sans",
                  }}
                >
                  Testimonials
                </a>
              </Link>
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              className={
                router.pathname == "/contactUs/contactUs" ? "active" : ""
              }
            >
              <Link href="/contactUs/contactUs">
                <a
                  style={{
                    textDecoration: "none",
                    color:
                      router.pathname === "/contactUs/contactUs"
                        ? "red"
                        : "black",
                    opacity: ".70",
                    fontFamily: "Open Sans",
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
