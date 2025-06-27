
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // if you're using static export
  basePath: '/ai',  // 👈 This is the fix
  trailingSlash: true
}

export default nextConfig
