const { default: pages } = require("../../scripts/pages.mjs");

module.exports = {
  logo: 'https://herohero.co/public/icons/safari-pinned-tab.svg',
  title: 'Martin\'s automations',
  description: 'Frequently asked questions about the Herohero platform - Content, Payments, Subscriptions and so on.',
  head: [
  ],

  themeConfig: {
    logo: 'https://herohero.co/public/icons/safari-pinned-tab.svg',
    nav: [
      { text: 'Back to the website', link: 'https:/automation.martinmalinda.cz' }
    ],

    sidebar: pages.map(page => {
      return {
        text: page.name, link: `${page.slug}.html`
      }
    }),
  },
}
