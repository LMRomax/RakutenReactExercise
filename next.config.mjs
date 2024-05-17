/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fr.shopping.rakuten.com',
        port: '',
        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;
