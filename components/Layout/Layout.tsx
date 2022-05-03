import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import Header from "./Header/Header";
import Headers from "./Header/Headers";
import Head from "next/head";
import Footer from "./Footer/Footer";
import { createTheme } from '@mui/material/styles';
import links from './Header/links';
const theme = createTheme({})
const Layout = ({ children }) => (


  <div style={{ overflow: "hidden" }}>
    <Head>
      <title>Melnick & Son's | Painting just got a whole lot easier</title>
    </Head>
    {/* header */}
    {/* <Header /> */}
    <Headers links={links}/>
    {/* SEO */}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{paddingTop: 150}}>{children}</div>
    </ThemeProvider>
    <Footer />
  </div>
);

export default Layout;
