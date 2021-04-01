/*
 * @Author: Fan
 * @Date: 2021-03-17 17:50:52
 * @description:
 */
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:
    process.env.MODE === 'multiple'
      ? path.resolve(__dirname, './src/multiple.tsx')
      : path.resolve(__dirname, './src/single.tsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'template.html'),
      filename: 'index.html',
      hash: false,
    }),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    compress: true,
    open: true,
    port: 6688,
    publicPath: '/',
  },
};
