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
