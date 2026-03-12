/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  reactStrictMode: true
};

export default nextConfig;
