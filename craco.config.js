const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#c41d7f',
              '@border-radius-base': '5px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
