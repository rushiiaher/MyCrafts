
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ai-conference-2025',  // ✅ must match deployed subdirectory
  trailingSlash: true
};

export default nextConfig;
