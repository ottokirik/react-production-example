import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'

export const buildCssLoaders = (isDev: boolean): RuleSetRule => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (path: string) => Boolean(path.includes('.module.')),
          localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base84:8]',
        },
      },
    },
    'sass-loader',
  ],
})
