import { Configuration } from 'webpack';
import { buildLoaders, buildPlugins, buildResolvers } from '.';
import { buildDevServer } from './buildDevServer';
import { BuildOptions } from './types/config';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const {
    mode,
    isDev,
    paths: { entry, build },
  } = options;

  return {
    mode,
    entry,
    output: {
      filename: '[name].[contenthash].js',
      path: build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
