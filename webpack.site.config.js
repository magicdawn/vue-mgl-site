const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

let gitee = process.env.TARGET_SITE === 'gitee'

module.exports = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(__dirname, './_site'),
    publicPath: gitee ? '/vue-mgl-site/' : '/',
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[contenthash:8].async.js',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {loader: 'less-loader', options: {javascriptEnabled: true}},
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: `chunk-vendors`,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial',
        },
        common: {
          name: `chunk-common`,
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        TARGET_SITE: `'${process.env.TARGET_SITE || ''}'`,
      },
    }),
    new HtmlWebpackPlugin({
      template: './site/index.html',
      inject: true,
      production: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[id].[contenthash:8].css',
    }),
  ],
})
