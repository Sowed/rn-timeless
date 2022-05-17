module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {},
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js', '.svg'],
        alias: {
          '@assets': './assets',
          '@components': './app/components',
          '@features': './app/features',
          '@icon': './app/components/icon',
          '@i18n': './app/i18n',
          '@navigators': './app/navigators',
          '@screens': './app/screens',
          '@services': './app/services',
          '@svg': './app/components/svg',
          '@timeless': './app',
          '@theme': './app/theme',
          '@types': './app/@types',
          '@utils': './app/utils',
        },
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    ['@babel/plugin-proposal-optional-catch-binding'],
  ],
};
