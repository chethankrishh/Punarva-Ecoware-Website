// craco.config.js
const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      if (process.env.NODE_ENV === "production") {
        // Force output filenames to use only contenthash (no readable names)
        webpackConfig.output.filename = "static/js/[contenthash].js";
        webpackConfig.output.chunkFilename = "static/js/[contenthash].chunk.js";

        // Ensure other assets also use contenthash
        if (webpackConfig.output && webpackConfig.output.assetModuleFilename) {
          webpackConfig.output.assetModuleFilename =
            "static/media/[contenthash][ext][query]";
        }

        // Disable source maps / devtool in production
        webpackConfig.devtool = false;

        // Return modified config
        return webpackConfig;
      }
      return webpackConfig;
    },
  },
};
