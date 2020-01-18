const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blogPost.js');
  const res = await graphql(
    `
      query {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  );

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
