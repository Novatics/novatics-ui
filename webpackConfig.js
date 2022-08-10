module.exports = (config, context) => {
  return {
    ...config,
    module: {
      rules: [
        {
          test: /\.m?js/,
          resolve: { fullySpecified: false },
        },
      ],
    },
  };
};
