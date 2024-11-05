/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules = config.module.rules.concat([
      // Add SVGR loader to import SVGs as react components
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [{ name: "removeViewBox", active: false }],
              },
            },
          },
        ],
      },

      {
        test: /\.txt$/,
        type: "asset/source",
      },
    ]);

    return config;
  },
};

export default nextConfig;
