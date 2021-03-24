/*
 * @Author: Fan
 * @Date: 2021-03-17 17:50:52
 * @description:
 */
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/main.tsx'),
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'template.html'),
      filename: 'index.html',
      hash: false,
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    compress: true,
    open: true,
    port: 8888,
    publicPath: '/',
  },
};
