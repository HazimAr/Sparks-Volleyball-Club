module.exports = {
  // 3x Faster refresh 5x Faster builds
  // Rust compiler
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/instagram",
        destination: "https://www.instagram.com/sparks_vbc_lv",
        permanent: true,
      },
      {
        source: "/tiktok",
        destination: "/",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "https://www.facebook.com/SparksVBCLV",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/channel/UCrUowRgcYRZif4HXd9RgO4A",
        permanent: true,
      },
    ];
  },
};
