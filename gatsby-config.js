module.exports = {
  siteMetadata: {
    siteUrl: "https://marks.wedding",
    title: 'Merrick and Sam',
    description: 'Join Merrick and Sam in their wedding celebration in Summer 2022.',
    image: '/images/social-image.jpg',
    titleTemplate: '%s - Merrick and Sam',
    keywords: 'merrick, melear, sam, samuel, marks, wedding'
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Merrick and Sam',
        short_name: 'M & S',
        start_url: '/',
        background_color: '#f7f4f2',
        theme_color: '#39200F',
        display: 'standalone',
        icon: 'src/images/icon.png',
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'handlee',
          'great vibes',
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-LS5T2BGTG5",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
