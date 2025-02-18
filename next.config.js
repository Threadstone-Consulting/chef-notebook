/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
        remotePatterns: [
            // NextJS <Image> component needs to whitelist domains for src={}
            { hostname: "lh3.googleusercontent.com" },
            { hostname: "pbs.twimg.com" },
            { hostname: "images.unsplash.com" },
            { hostname: "logos-world.net" },
            { hostname: "demo.vercel.store"}
        ],
  },
  async rewrites() {
        return [
          {
            source: "/plausible/js/script.js",
            destination: "https://plausible.io/js/script.js",
          },
          {
            source: "/plausible/api/event",
            destination: "https://plausible.io/api/event",
          },
        ];
    }
};

module.exports = nextConfig;
