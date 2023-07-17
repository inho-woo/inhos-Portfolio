/** @type {import('next').NextConfig} */

const nextConfig = {
  // async rewrites() {
  //   return[
  //     {
  //       source : '/about(.*)',
  //       destination : '/components/about'
  //     },
  //     {
  //       source : '/project(.*)',
  //       destination : '/components/career'
  //     },
  //     {
  //       source : '/contact(.*)',
  //       destination : '/components/contact'
  //     },

  //   ]
  // },
  reactStrictMode: true,
  images:{
    domains : [
      'www.notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com'
    ]
  }
}

module.exports = nextConfig