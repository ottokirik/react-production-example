import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin } from 'webpack'

import type { WebpackPluginInstance } from 'webpack'
import type { BuildOptions } from './types/config'

export const buildPlugins = ({ paths: { html }, isDev }: BuildOptions): WebpackPluginInstance[] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      IS_DEV: JSON.stringify(isDev),
    }),
  ]

  if (isDev) {
    plugins.push(
      new HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      })
    )
  }

  return plugins
}
