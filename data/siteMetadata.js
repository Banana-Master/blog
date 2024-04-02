/** @type {import("pliny/config").PlinyConfig } */

// TODO : 소셜 배너 바꿔야함
const siteMetadata = {
  title: '성호의 개발 블로그',
  author: 'Banana-Master',
  headerTitle: '성호의 dev.log',
  description: '개발 활동을 하면서 느낀 점을 기록하는 곳입니다.',
  language: 'ko-KR',
  theme: 'system', // system, dark or light
  siteUrl: 'https://banana-master-blog.vercel.app',
  siteRepo: 'https://github.com/Banana-Master/blog',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/social-banner.png',
  email: 'tjdgh0313@gmail.com',
  github: 'https://github.com/Banana-Master/blog',
  linkedin: 'https://www.linkedin.com/in/%EA%B9%80%EC%84%B1%ED%98%B8-sungho-kim-b082682a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  discord: 'https://discordapp.com/users/323774576435920897',
  locale: 'ko-KR',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  comments: {
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: 'Banana-Master/blog-comment',
      repositoryId: '',
      category: 'Comments',
      categoryId: '',
      mapping: 'pathname',
      reactions: '1',
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'ko',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
