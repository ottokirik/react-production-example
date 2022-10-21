declare module '*.sass' {
  type ClassNames = Record<string, string>
  const classNames: ClassNames
  export = classNames
}

declare module '*.svg' {
  import type React from 'react'
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare const _IS_DEV_: boolean
declare const _API_: string
