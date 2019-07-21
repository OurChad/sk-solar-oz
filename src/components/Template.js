import React from 'react';
import styled from 'styled-components';
import { Link, navigate, graphql, useStaticQuery } from 'gatsby';
import Page from './Page';

const Data = styled.div`
    padding: 0 1rem 0 1rem;
`;
export default ({ data }) => {
  const routes = data.routes.edges.map(({ node }) => ({
    ...node.frontmatter
  }));

  return (
    <Page routes={routes}>
      <Data dangerouslySetInnerHTML={{ __html: data.page.html }} />
    </Page>
  );
};

export const query = graphql`
  query($fileAbsolutePath: String!) {
    page: markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      html
      frontmatter {
        title
      }
    }
    routes: allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
        edges {
          node {
            frontmatter {
              title
              path
            }
          }
        }
      }
  }
`;
