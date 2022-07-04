const { default: pages } = require("../../scripts/pages.mjs");

module.exports = {
  logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQEPSBEOddfbHw/company-logo_200_200/0/1656513521414?e=1665014400&v=beta&t=Ea5GQmC2SOlIdVTfoO4eDdl6V38x1OZxbZ6TYT50OBc',
  title: 'Martin\'s automations',
  description: 'Frequently asked questions about the Herohero platform - Content, Payments, Subscriptions and so on.',
  head: [
  ],

  themeConfig: {
    logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQEPSBEOddfbHw/company-logo_200_200/0/1656513521414?e=1665014400&v=beta&t=Ea5GQmC2SOlIdVTfoO4eDdl6V38x1OZxbZ6TYT50OBc',
    nav: [
      { text: 'Back to the website', link: 'https://automation.martinmalinda.cz' }
    ],

    sidebar: pages.map(page => {
      return {
        text: page.name, link: `${page.slug}.html`
      }
    }),
  },
}
