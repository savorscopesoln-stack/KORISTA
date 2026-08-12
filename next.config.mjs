/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "korista.afripixelprojects.com",
      },
    ],
  },
};

export default nextConfig;
