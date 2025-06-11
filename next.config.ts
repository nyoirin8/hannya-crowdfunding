// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // true ではなく空オブジェクトに修正
  },
};

export default nextConfig;
