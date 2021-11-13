module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
        siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
        // {
        //     resolve: `gatsby-plugin-sass`,
        //     options: {
        //         implementation: require(`node-sass`),
        //         postCssPlugins: [
        //             require(`postcss-preset-env`),
        //             require(`autoprefixer`),
        //             require(`postcss-nested`),
        //         ],
        //         sassOptions: {
        //             precision: 6,
        //         },
        //     },
        // },
        // {
        //     resolve: `gatsby-plugin-postcss`,
        //     options: {
        //         postCssPlugins: [require(`postcss-preset-env`)],
        //     },
        // },
        // {
        //     resolve: `gatsby-plugin-purgecss`,
        //     options: {
        //         printRejected: true, // Print removed selectors and processed file names
        //         // develop: true, // Enable while using `gatsby develop`
        //         // tailwind: true, // Enable tailwindcss support
        //         // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        //         // purgeOnly: [
        //         //     "components/",
        //         //     "/commons.css",
        //         //     "/bootstrap.css",
        //         //     "bootstrap/dist/css/bootstrap.css",
        //         //     "bootstrap/",
        //         // ], // Purge only these files/folders
        //         purgeCSSOptions: {
        //             // https://purgecss.com/configuration.html#options
        //             // safelist: ['safelist'], // Don't remove this selector
        //         },
        //         // More options defined here https://purgecss.com/configuration.html#options
        //     },
        // },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true, // defaults to false
            },
        },
    ],
}
