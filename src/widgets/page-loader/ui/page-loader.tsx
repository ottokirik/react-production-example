import { classNames } from 'shared/lib/class-names'
import { Loader } from 'shared/ui'
import classes from './page-loader.module.sass'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className = '' }: PageLoaderProps): JSX.Element => (
  <div className={classNames({ cls: classes.pageLoader, adds: [className] })}>
    <Loader />
  </div>
)
