require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PUBLIC_URL: process.env.PUBLIC_URL,
  },
  images: {
    domains: ['ancient-shore-48653.herokuapp.com'],
  },
};

module.exports = nextConfig;
