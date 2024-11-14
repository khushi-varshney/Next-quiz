/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'seeklogo.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'www.pngplay.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'i.pinimg.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'cdn.pixabay.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'media0.giphy.com',
            port: '',
          },
        ],
         
      },
};

export default nextConfig;
