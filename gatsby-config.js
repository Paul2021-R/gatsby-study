module.exports = {
    siteMetadata: {
      title: `Paul's blog study`,
      description: `제대로 달려본다. 끝까지 끝내보자!`,
      author: `@haryu`,
    },
    plugins: [
      {
        resolve: 'gatsby-plugin-typescript',
        options: {
          isTSX: true,
          allExtensions: true,
        },
      },
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `contents`,
          path: `${__dirname}/contents`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/static`,
        },
      },
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaults: {
            formats: ['auto', 'webp'],
            quality: 100,
            placeholder: 'blurred',
          }
        }
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: 'gatsby-remark-smartypants',
              options: {
                dashes: 'oldschool',
              },
            },
            {
              resolve: 'gatsby-remark-prismjs',
              options: {
                classPrefix: 'language-',
              },
            },
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 768,
                quality: 100,
                withWebp: true,
              },
            },
            {
              resolve: 'gatsby-remark-copy-linked-files',
              options: {},
            },
            {
              resolve: 'gatsby-remark-external-links',
              options: {
                target: '_blank',
                rel: 'nofollow',
              },
            },
          ],
        },
      },
      `gatsby-plugin-emotion`,
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: <https://gatsby.dev/offline>
      // `gatsby-plugin-offline`,
    ],
  };