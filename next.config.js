/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
  },
  compiler:{
    styledComponents: true,
  },
  optimizeFonts: false,
  async rewrites(){
    return [
      {
        source:'/',
        destination:'/page/1'
      },
      {
        source:'/index',
        destination:'/page/1'
      },
    ]
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
    reloadOnOnline: false
  }
  

}

module.exports = withPWA(nextConfig)
