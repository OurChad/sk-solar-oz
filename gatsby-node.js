const path = require('path');

exports.createPages = ({ graphql, actions }) =>
// **Note:** The graphql function call returns a Promise
// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
                fileAbsolutePath
                html
                frontmatter {
                    title
                    path
                }
            }
          }
        }
      }
    `
  ).then((result) => {
    const pages = result.data.allMarkdownRemark.edges;
    const { createPage } = actions;
    pages.forEach((page) => {
      const { node: { frontmatter: { path: pagePath } } } = page;
      console.log('********** CREATING PAGE: ', pagePath);
      createPage({
        path: pagePath,
        component: path.resolve('./src/components/Template.js'),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          fileAbsolutePath: page.node.fileAbsolutePath,
        }

        //   tags.forEach((tag) => {
        //     console.log('********** CREATING PAGE: ', tag);
        //     createPage({
        //       path: pagePath,
        //       component: path.resolve('./src/components/Template.js'),
        //       context: {
        //         // Data passed to context is available
        //         // in page queries as GraphQL variables.
        //         fileAbsolutePath: page.node.fileAbsolutePath,
        //       },
        //     });
      });
    });
  });
