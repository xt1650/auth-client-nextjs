/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET
      },
    
      async rewrites() {
        return [
          {
            source: '/account/:path*',
            destination: 'http://127.0.0.1:5290/account/:path*',
          },
        ]
      },
};

export default nextConfig;
