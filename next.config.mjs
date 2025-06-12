/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Configure webpack to handle Framer Motion ESM modules
  webpack: (config, { isServer }) => {
    // For Framer Motion ESM modules
    config.resolve.alias = {
      ...config.resolve.alias,
      'framer-motion': 'framer-motion/dist/framer-motion',
    };
    
    // Important: return the modified config
    return config;
  },
  
  // Enable SWC minification
  swcMinify: true,
  
  // Enable compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
};

export default nextConfig;
