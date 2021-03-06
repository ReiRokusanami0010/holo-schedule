module.exports = ({ isChrome, PACKAGE = {} } = {}) => ({
  manifest_version: 2,
  name: '__MSG_extensionName__',
  description: '__MSG_extensionDescription__',
  version: PACKAGE.version,
  homepage_url: PACKAGE.repository,
  author: PACKAGE.author,
  default_locale: 'en',
  icons: {
    16: 'icons/icon@16.png',
    32: 'icons/icon@32.png',
    48: 'icons/icon@48.png',
    96: 'icons/icon@96.png',
    128: 'icons/icon@128.png',
  },
  permissions: [
    'alarms',
    'notifications',
    'storage',
  ],
  background: {
    scripts: [
      'src/background.js',
    ],
  },
  browser_action: {
    browser_style: true,
    default_title: '__MSG_browserActionTitle__',
    default_icon: {
      16: 'icons/icon@16.png',
      32: 'icons/icon@32.png',
    },
    default_popup: 'src/popup.html',
  },
  web_accessible_resources: [
    'assets/*',
  ],
  ...(isChrome ? {
    minimum_chrome_version: '57.0',
  } : {
    browser_specific_settings: {
      gecko: {
        id: 'holo-schedule@holo.dev',
        strict_min_version: '57.0',
      },
    },
  }),
})
