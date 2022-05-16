/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"]
  },
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
  }
}

module.exports = nextConfig
