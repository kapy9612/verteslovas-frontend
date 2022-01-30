module.exports = {
  siteMetadata: {
      title: `verteslovas-frontend`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-sitemap`,
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `media`,
              path: `${__dirname}/static/`
          }
      },
  ]
};