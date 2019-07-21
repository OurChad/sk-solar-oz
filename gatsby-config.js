module.exports = {
  siteMetadata: {
    title: 'SK Solar Oz Pty Ltd',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    'gatsby-transformer-remark',
  ],
};