module.exports = {
  webpack5: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zero3games.com.br",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.zero3games.com.br",
        port: "",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
