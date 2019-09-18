// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Stackbit Azimuth Gridsome Theme',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/*.md',
        typeName: 'BlogPost',
        route: '/blog/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/data/Header.yml',
        typeName: 'headerData',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/data/Footer.yml',
        typeName: 'footerData',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/data/Social.yml',
        typeName: 'socialData',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/home.md',
        typeName: 'homeData',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/features.md',
        typeName: 'featuresData',
      },
    },
  ]
}
