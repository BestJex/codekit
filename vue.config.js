module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    config.plugin('prefetch').tap(options => {
      // eslint-disable-next-line no-param-reassign
      if (!options[0].fileBlacklist) options[0].fileBlacklist = [];
      options[0].fileBlacklist.push(
        /lang-(en|ja)-json(\..+)?.js$/,
        /lang-.+.js$/,
        /pkg-.+(\..+)?.js/,
        /mirror-.+(\..+)?.js/
        );
      return options;
    });
    config.module
      .rule('raw')
      .test(/\.md|\.yaml$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  },
  pluginOptions: {
    i18n: {
      locale: 'zhCN',
      fallbackLocale: 'zhCN',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  productionSourceMap: false
};
