/** @type {import('next').NextConfig} */
// @ts-ignore
const buildTimestamp = Date.now()

const nextConfig = {
  output: 'standalone',
  // 确保静态资源可以被正确访问
  poweredByHeader: false,
  // 如果你的网站部署在子目录，可以设置 basePath
  // basePath: '',
  // 如果需要从 CDN 加载静态资源，可以设置 assetPrefix
  // assetPrefix: 'https://tyk.tangyikai.top',
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      const timestampSuffix = `.${buildTimestamp}`
      // 为客户端产物增加时间戳，便于区分部署版本
      config.output.filename = `static/chunks/[name].[contenthash]${timestampSuffix}.js`
      config.output.chunkFilename = `static/chunks/[name].[contenthash]${timestampSuffix}.js`
    }
    return config
  },
};

export default nextConfig;
