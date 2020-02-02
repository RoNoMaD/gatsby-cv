module.exports = {
  siteMetadata: {
    title: "Romain Lebascle"
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-eslint",
    "gatsby-plugin-linaria",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/blog`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Romain Lebascle CV",
        short_name: "R. Lebascle",
        start_url: "/",
        background_color: "#212121",
        theme_color: "#83b82e",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png" // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images`
        }
      }
    },
    {
      resolve: "gatsby-plugin-stylelint",
      options: { files: ["src/**/*.{js,jsx,css}"] }
    }
  ]
};
