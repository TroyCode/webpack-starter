const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/scripts/index.js',
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   title: 'Caching',
    // }),
    // new BundleAnalyzerPlugin(),
    new webpack.HashedModuleIdsPlugin(),
  ],
  output: {
    filename: 'webpack-numbers.[contenthash].js',
    // chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'webpackNumbers',
    libraryTarget: 'umd',
  },
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
};
