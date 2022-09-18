type Mods = Record<string, boolean | string>;

interface ClassNamesProps {
  cls: string;
  mods?: Mods;
  adds?: string[];
}

export const classNames = ({ cls, mods = {}, adds = [] }: ClassNamesProps): string =>
  [
    cls,
    ...adds.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
