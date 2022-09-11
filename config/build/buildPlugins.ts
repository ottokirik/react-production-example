import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin, WebpackPluginInstance } from 'webpack';
import { BuildOptions } from './types/config';

export const buildPlugins = ({ paths: { html } }: BuildOptions): WebpackPluginInstance[] => [
  new HtmlWebpackPlugin({
    template: html,
  }),
  new ProgressPlugin(),
];
