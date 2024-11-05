module.exports = {
  webpack: {
    configure: (config) => {
      config.resolve.plugins = config.resolve.plugins.filter(
        ({ constructor }) => constructor?.name !== "ModuleScopePlugin"
      );
      return config;
    },
  },
};
