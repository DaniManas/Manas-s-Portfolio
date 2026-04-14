/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brm-workforce.oracle.com',
        pathname: '/pdf/certview/images/**',
      },
    ],
  },
};

export default nextConfig;
