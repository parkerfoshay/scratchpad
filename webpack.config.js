const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = env => {
  const mode = env.mode ? env.mode : 'production';

  return {
    mode,
    entry: {
      main: './src/index.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        minify: { collapseWhitespace: true, removeComments: true },
        inject: false,
      }),
      new InjectManifest({
        swSrc: './src/src-sw.js',
        swDest: 'sw.js',
      }),
    ],
  };
};
