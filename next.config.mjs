/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // 确保静态资源可以被正确访问
  poweredByHeader: false,
  // 如果你的网站部署在子目录，可以设置 basePath
  // basePath: '',
  // 如果需要从 CDN 加载静态资源，可以设置 assetPrefix
  // assetPrefix: 'https://tyk.tangyikai.top',
};

export default nextConfig;
