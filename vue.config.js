const webpack = require('webpack')
const fs = require('fs')
const packageJson = fs.readFileSync('./package.json')
const version = JSON.parse(packageJson).version || 0

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          PACKAGE_VERSION: '"' + version + '"'
        }
      })
    ]
  },
  pwa: {
    serviceWorker:false,
    iconPaths: {
      favicon16: 'img/icons/favicon-16x16.png',
      favicon32: 'img/icons/favicon-32x32.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      msTileImage: 'img/icons/mstile-150x150.png'
    },
    manifestPath: 'manifest.json',
    name: 'NeronUI',
    themeColor: '#121212',
    msTileColor: '#121212',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    manifestOptions: {
      "short_name": "NeronUI",
      "name": "NeronUI",
      "start_url": "/",
      "display": "standalone",
      "theme_color": "#D51F26",
      "background_color": "#121212",
      "icons": [
        {
          "src": "./img/icons/icon-192.png",
          "sizes": "192x192",
          "type": "image/png",
        },
        {
          "src": "./img/icons/icon-512.png",
          "sizes": "512x512",
          "type": "image/png",
        },
      ]
    }
  }
}