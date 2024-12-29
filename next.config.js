{
  import("next").NextConfig;
}

const imageConfig = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
      port: "",
    },
    {
      protocol: "https",
      hostname: "upload.wikimedia.org",
      port: "",
    },
  ],
};
const nextConfig = {
  images: imageConfig,
};

module.exports = nextConfig;
