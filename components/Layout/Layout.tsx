import { CssBaseline } from '@material-ui/core';
import React from 'react';
import Header from './Header/Header';
import Head from "next/head";
import Footer from './Footer/Footer';

const Layout = ({ children }) => (
  <div style={{overflow: 'hidden'}}>
     <Head>
        <title>Melnick & Son's | Painting just got a whole lot easier</title>
      </Head>
    {/* header */}
    <Header />
    {/* SEO */}
    <CssBaseline/>

    {children}
    <Footer/>
  </div>
);

export default Layout;
