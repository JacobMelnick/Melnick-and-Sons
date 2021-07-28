import { CssBaseline } from '@material-ui/core';
import React from 'react';
import Header from './Header/Header';
import Head from "next/head";
const Layout = ({ children }) => (
  <div>
     <Head>
        <title>MelnickandSons</title>
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
