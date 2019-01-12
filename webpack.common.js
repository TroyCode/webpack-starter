const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/scripts/index.js',
    polyfills: './src/scripts/polyfills.js',
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Shimming',
    }),
    // new BundleAnalyzerPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.ProvidePlugin({
      join: ['lodash', 'join'],
    }),
  ],
  module: {
    rules: [
      {
        test: require.resolve('./src/scripts/globals.js'),
        use: 'exports-loader?file,parse=helpers.parse',
      },
    ],
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
