const jssConfig = require('./src/temp/config');
const { getPublicUrl } = require('@sitecore-jss/sitecore-jss-nextjs');
const plugins = require('./src/temp/next-config-plugins') || {};

const publicUrl = getPublicUrl();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Set assetPrefix to our public URL
  assetPrefix: publicUrl,

  // Allow specifying a distinct distDir when concurrently running app in a container
  distDir: process.env.NEXTJS_DIST_DIR || '.next',

  /*images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },*/

  images: {
    domains: [
      'xmc-altudo1-sitecorepra14b9-mccormickdev.sitecorecloud.io'
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  // Make the same PUBLIC_URL available as an environment variable on the client bundle
  env: {
    PUBLIC_URL: publicUrl,
  },
  i18n: {
    // These are all the locales you want to support in your application.
    // These should generally match (or at least be a subset of) those in Sitecore.
    // DEMO TEAM CUSTOMIZATION - Remove unused languages and add some
    locales: [
      'en',
      'fr-CA',
      'ja-JP',
    ],
    // END CUSTOMIZATION
    // This is the locale that will be used when visiting a non-locale
    // prefixed path e.g. `/styleguide`.
    defaultLocale: jssConfig.defaultLanguage,
    localeDetection: false, // DEMO TEAM CUSTOMIZATION - Disable locale detection
  },
  // Enable React Strict Mode
  reactStrictMode: true,

  async rewrites() {
    // When in connected mode we want to proxy Sitecore paths off to Sitecore
    return [
      // API endpoints
      {
        source: '/sitecore/api/:path*',
        destination: `${jssConfig.sitecoreApiHost}/sitecore/api/:path*`,
      },
      // media items
      {
        source: '/-/:path*',
        destination: `${jssConfig.sitecoreApiHost}/-/:path*`,
      },
      // visitor identification
      {
        source: '/layouts/system/:path*',
        destination: `${jssConfig.sitecoreApiHost}/layouts/system/:path*`,
      },
      // healthz check
      {
        source: '/healthz',
        destination: '/api/healthz',
      },
      // rewrite for Sitecore service pages
      {
        source: '/sitecore/service/:path*',
        destination: `${jssConfig.sitecoreApiHost}/sitecore/service/:path*`,
      }, 
    ];
  },
};

module.exports = () => {
  // Run the base config through any configured plugins
  return Object.values(plugins).reduce((acc, plugin) => plugin(acc), nextConfig);
}


/*const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  env: {
      NEXT_PUBLIC_ENV: 'PRODUCTION', //your next configs goes here
  },
})*/

