/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      // Wildcard path matching
      {
        source: "/",
        destination: "/program/futbol",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
