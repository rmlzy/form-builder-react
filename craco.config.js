const CracoLessPlugin = require("craco-less");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.publicPath = env === "production" ? "/public/react/" : "/";
      return webpackConfig;
    },
  },

  devServer: {
    proxy: {
      "/api": "http://127.0.0.1:1028",
    },
  },

  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#0170fe" },
            javascriptEnabled: true,
          },
        },
      },
    },

    {
      plugin: AntdDayjsWebpackPlugin,
    },
  ],
};
