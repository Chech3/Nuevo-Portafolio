/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: [{ protocol: "https", hostname: 'www.ubu.es' }],
    remotePatterns: [{ protocol: "https", hostname: 'images.pexels.com' }],
  },
};

export default nextConfig;
