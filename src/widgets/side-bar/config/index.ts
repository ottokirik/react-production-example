import { AppRoutes } from 'shared/config/route-config'
import { SideBarLinkProps } from '../ui/side-bar-link/side-bar-link'

import { ReactComponent as AboutIcon } from 'shared/assets/icons/about.svg'
import { ReactComponent as MainIcon } from 'shared/assets/icons/main.svg'
import { ReactComponent as ProfileIcon } from 'shared/assets/icons/profile.svg'

export const SideBarLinks: SideBarLinkProps[] = [
  { path: AppRoutes.MAIN, translationKey: 'main', icon: MainIcon },
  { path: AppRoutes.ABOUT, translationKey: 'about-us', icon: AboutIcon },
  { path: AppRoutes.PROFILE, translationKey: 'profile', icon: ProfileIcon },
]
