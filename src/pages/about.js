import React from 'react';
import { Link } from 'gatsby';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </div>
  );
};

export default About;
