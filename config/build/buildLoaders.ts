import { RuleSetRule } from 'webpack'

import { BuildOptions } from './types/config'
import { buildCssLoaders } from './loaders/build-css-loaders'
import { buildSvgLoader } from './loaders/build-svg-loader'

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options

  const svgLoader = buildSvgLoader()

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: 'file-loader',
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const styleLoader = buildCssLoaders(isDev)

  return [fileLoader, svgLoader, tsLoader, styleLoader]
}
