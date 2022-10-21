import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/class-names'
import { AppLink } from 'shared/ui'
import { AppLinkTheme } from 'shared/ui/app-link/app-link'

import css from './side-bar-link.module.sass'

export interface SideBarLinkProps {
  translationKey: string
  path: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  siSideBarOpen?: boolean
}

export const SideBarLink = memo((props: SideBarLinkProps): JSX.Element => {
  const { t } = useTranslation()
  const { translationKey, path, icon: Icon, siSideBarOpen } = props

  return (
    <AppLink className={css.sideBarLink} theme={AppLinkTheme.SECONDARY} to={path}>
      <>
        <Icon className={css.sideBarLinkIcon} />
        <span className={classNames({ cls: css.sideBarLinkText, mods: { [css.open]: siSideBarOpen ?? false } })}>
          {t(translationKey)}
        </span>
      </>
    </AppLink>
  )
})

SideBarLink.displayName = 'SideBarLink'
