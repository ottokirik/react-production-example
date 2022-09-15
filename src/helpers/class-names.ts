type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods, adds: string[]): string =>
  [
    cls,
    ...adds,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
