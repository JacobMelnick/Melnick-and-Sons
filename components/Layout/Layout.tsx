import { CssBaseline } from '@material-ui/core';
import React from 'react';
import Header from './Header/Header';
import Head from "next/head";
const Layout = ({ children }) => (
  <div style={{marginTop: "2%", overflow: 'hidden'}}>
     <Head>
        <title>Melnick & Son's | Painting just got a whole lot easier</title>
      </Head>
    {/* header */}
    <Header />
    {/* SEO */}
    <CssBaseline/>

    {children}
    {/* Footer */}
  </div>
);

export default Layout;
