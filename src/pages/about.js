import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

const About = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
      <Footer />
    </div>
  );
};

export default About;
