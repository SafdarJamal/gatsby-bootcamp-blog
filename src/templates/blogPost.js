import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import Head from '../components/head';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`;

const BlogPost = ({ data }) => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const src = node.data.target.fields.file['en-US'].url;
        const alt = node.data.target.fields.title['en-US'];
        return <img src={src} alt={alt} />;
      },
    },
  };

  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.date}</p>
      {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
    </Layout>
  );
};

export default BlogPost;
