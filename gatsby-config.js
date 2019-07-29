module.exports = {
  siteMetadata: {
    title: 'SK Solar Oz Pty Ltd',
    description: 'Solar Energy Contracting and Solutions. Renewable energy is a rapidly evolving industry and we have been a key part in the successful delivery of many solar farm projects thanks to our ever expanding base of multi-talented skilled labour.',
    url: 'https://sksolaroz.com.au',
    image: 'src/images/logo-oz.png',
    icon: 'src/images/logo-oz.png'
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
    'gatsby-plugin-react-helmet',
  ],
};
