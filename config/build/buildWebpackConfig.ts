import { Configuration } from 'webpack';
import { buildLoaders, buildPlugins, buildResolvers } from '.';
import { BuildOptions } from './types/config';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const {
    mode,
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
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
};
