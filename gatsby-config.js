require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
      title: `verteslovas-frontend`,
    siteUrl: `https://www.verteslovas.hu`
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
      {
          resolve: "gatsby-source-strapi",
          options: {
              apiURL: process.env.STRAPI_URL,
              queryLimit: 100, // Defaults to 100
              singleTypes: [
                  `birthday-page`,
                  /*`for-companies-page`,
                  `for-families-page`,
                  `horse-riding-page`,
                  `housing-page`,
                  `organize-your-camp-page`,
                  `our-camps-page`,
                  `services-page`,
                  `wedding-page`,*/
              ],
              collectionTypes: [],
          },
      },
  ]
};