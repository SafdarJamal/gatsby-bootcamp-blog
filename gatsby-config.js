require('dotenv').config();

module.exports = {
  siteMetadata: {
    author: 'Safdar Jamal',
    title: 'Full-Stack Bootcamp;',
    description:
      'A minimal blogging site built with Gatsby using Contentful and hosted on Netlify.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
