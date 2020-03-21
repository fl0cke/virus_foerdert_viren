// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Virus fördert Viren',
  templates: {
    Measure: '/maßnahmen/:number/:title',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: 'content/measures',
        path: '*.md',
        typeName: 'Measure',
      },
    }, {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        purgeConfig: {
          whitelist: ['svg-inline--fa'],
          whitelistPatterns: [/shiki/, /fa-$/]
        }
      },
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    },
  },
}
