import { buildWebpackConfig } from './config/build'
import type { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config'
import { resolve } from 'path'
import type { Configuration } from 'webpack'

export default (env: BuildEnv): Configuration => {
  const paths: BuildPaths = {
    entry: resolve(__dirname, 'src', 'index.tsx'),
    build: resolve(__dirname, 'build'),
    html: resolve(__dirname, 'public', 'index.html'),
    src: resolve(__dirname, 'src'),
  }

  const mode: BuildMode = env.mode ?? 'development'
  const isDev = mode === 'development'
  const port = env.port ?? 3000
  const apiUrl = env.apiUrl ?? 'http://localhost:8000'

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    apiUrl,
  })

  return config
}
