module.exports = {
  logo: 'https://herohero.co/icons/safari-pinned-tab.svg',
  title: 'Help & Support',
  description: 'Frequently asked questions about the Herohero platform - Content, Payments, Subscriptions and so on.',
  head: [

    ['link', { rel: 'icon', href: 'https://herohero.co/icons/safari-pinned-tab.svg' }],
    ['link', { rel: 'preload', href: 'https://herohero.co/fonts/Silka-Bold.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
    ['link', { rel: 'preload', href: 'https://herohero.co/fonts/Silka-Medium.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
    ['link', { rel: 'preload', href: 'https://herohero.co/fonts/Silka-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
    ['link', { rel: 'preload', href: 'https://herohero.co/fonts/Silka-Bold.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
  ],

  themeConfig: {
    logo: 'https://herohero.co/icons/safari-pinned-tab.svg',
    nav: [
      { text: 'Back to Herohero', link: 'https://herohero.co' }
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/cs/guide/': getCzechSidebar(),
    },

    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
      },
      '/cs/': {
        label: 'Česky',
        selectText: 'Jazyk',
        nav: [
          { text: 'Zpět na Herohero', link: 'https://herohero.co' }
        ],
      },
    },
  },

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Help & Support',
      description: 'Frequently asked questions about the Herohero platform - Content, Payments, Subscriptions and so on.',
      selectText: 'English',
    },
    '/cs/': {
      lang: 'cs-CZ',
      title: 'Podpora',
      description: 'Časté otázky o platformě Herohero. Obsah, Platby, Odběry a jiné.',
      selectText: 'Česky',
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'General',
      children: [
        { text: 'About', link: '/guide/getting-started' },
        { text: 'Content', link: '/guide/content' },
        { text: 'Payments', link: '/guide/payments' },
      ],
    }, {
      text: 'Creators',
      children: [
        { text: 'Subscriptions', link: '/guide/subscriptions' },
        { text: 'Connecting to Stripe', link: '/guide/stripe' },
        { text: 'Payouts', link: '/guide/payouts' },
        { text: 'Taxes', link: '/guide/taxes' },
      ]
    },
    {
      text: 'Contact ✉️',
      children: [
        { text: 'info@herohero.co' }
      ]
    }
  ]
}

function getCzechSidebar() {
  return [
    {
      text: 'Obecné',
      children: [
        { text: 'O platformě', link: '/cs/guide/getting-started' },
        { text: 'Obsah', link: '/cs/foo' },
        { text: 'Platby', link: '/cs/foo' },
        { text: 'Odběry', link: '/cs/foo' },
      ],
    }, {
      text: 'Tvůrci',
      children: [
        { text: 'Připojení Stripe', link: '/cs/foo' },
        { text: 'Výplaty', link: '/cs/foo' },
        { text: 'Daně', link: '/cs/foo' },
      ]
    },
    {
      text: 'Kontakt ✉️',
      children: [
        { text: 'info@herohero.co' }
      ]
    }
  ]
}
