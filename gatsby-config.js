const config = require("./config")

module.exports = {
  siteMetadata: {
    title: `innovagesoftwares`,
    description: `Innovage Softwares`,
    author: `@innovagesoftwares`,
    wpUrl: config.wordPressUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `${config.wordPressUrl}/graphql`,
        searchAndReplaceContentUrls: {
          sourceUrl: `${config.wordPressUrl}`,
          replacementUrl: ``,
        },
        // refetch interval in seconds
        // refetchInterval: 60,
      },
    },
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     /*
    //      * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
    //      * Example : 'demo.wp-api.org' or 'www.example-site.com'
    //      */
    //     excludedRoutes: ["**/settings", "**/wp/v2/users/me", "**/wp/v2/themes"],
    //     baseUrl: "innovagesoftwares.com/innovage_gatsby",
    //     protocol: "https",
    //     hostingWPCOM: false,
    //     useACF: true,
    //     verboseOutput: false,
    //     acfOptionPageIds: [],
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
