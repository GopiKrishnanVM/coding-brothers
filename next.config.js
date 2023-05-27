 {import('next').NextConfig}


 const imageConfig = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
      port: "",
    },
  ],
}
const nextConfig = {
  images: imageConfig,
};

module.exports = nextConfig;
