import { buildWebpackConfig } from './config/build';
import { BuildMode, BuildPaths } from './config/build/types/config';
import { resolve } from 'path';
import { Configuration } from 'webpack';

const paths: BuildPaths = {
  entry: resolve(__dirname, 'src', 'index.ts'),
  build: resolve(__dirname, 'build'),
  html: resolve(__dirname, 'public', 'index.html'),
};

const mode: BuildMode = 'development';
const isDev = mode === 'development';

const config: Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
});

export default config;
