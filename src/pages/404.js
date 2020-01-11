import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const NotFound = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </Layout>
  );
};

export default NotFound;
