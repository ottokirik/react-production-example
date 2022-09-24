import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ProgressPlugin, WebpackPluginInstance, DefinePlugin } from 'webpack';
import { BuildOptions } from './types/config';

export const buildPlugins = ({ paths: { html }, isDev }: BuildOptions): WebpackPluginInstance[] => [
  new HtmlWebpackPlugin({
    template: html,
  }),
  new ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  }),
];
