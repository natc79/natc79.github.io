/** @type {import('next').Next.js} */
const nextConfig = {
  output: "export", // Outputs a static 'out' folder
  trailingSlash: true,
  images: {
    unoptimized: true, // Necessary for static hosting on GitHub Pages
  },
  // If your site was at natc79.github.io/portfolio, you would need:
  // basePath: '/portfolio',
};

module.exports = nextConfig;
