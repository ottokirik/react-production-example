import path from 'path'
import { Configuration } from 'webpack'
import { buildCssLoaders } from '../build/loaders/build-css-loaders'
import { buildSvgLoader } from '../build/loaders/build-svg-loader'
import { BuildPaths } from '../build/types/config'

export default ({ config }: { config: Configuration }): Configuration => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }

  config.module?.rules?.forEach((rule) => {
    if (rule instanceof Object && 'test' in rule) {
      // eslint-disable-next-line @typescript-eslint/prefer-includes
      if (/svg/.test(rule.test as string)) {
        rule.exclude = /\.svg$/i
      }
    }
  })

  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('ts', 'tsx')
  config.module?.rules?.push(buildSvgLoader(), buildCssLoaders(true))

  return config
}
