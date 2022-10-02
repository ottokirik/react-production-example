import { RuleSetRule } from 'webpack'

export const buildSvgLoader = (): RuleSetRule => ({
  test: /\.svg$/,
  use: {
    loader: '@svgr/webpack',
    options: {
      exportType: 'named',
    },
  },
})
