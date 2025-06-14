/** @type {import('next').NextConfig} */
const nextConfig = {
  // 修正後（空オブジェクトに）
experimental: {
  serverActions: {},
}
,
};

export default nextConfig;
