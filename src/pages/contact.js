import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Contact = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{' '}
        <a href="https://twitter.com/_safdarjamal" target="_blank">
          @_safdarjamal
        </a>{' '}
        on Twitter.
      </p>
      <Footer />
    </div>
  );
};

export default Contact;
