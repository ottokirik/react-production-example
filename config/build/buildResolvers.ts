import { ResolveOptions } from 'webpack';

export const buildResolvers = (): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.jsx', '.js'],
});
