import React, { Fragment } from 'react';

import Header from './header';
import Footer from './footer';
import '../styles/index.scss';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
