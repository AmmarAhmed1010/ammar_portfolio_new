/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Webpack configuration
  webpack: (config) => {
    // Add any necessary webpack configuration here
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
