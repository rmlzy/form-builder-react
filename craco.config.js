const CracoLessPlugin = require("craco-less");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

module.exports = {
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
