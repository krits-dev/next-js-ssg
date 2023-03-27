import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface IProps {
  children: ReactNode
}

function ContentLayout({ children }: IProps) {
  return (
    <>
      <div className={styles.contentLayout}>{children}</div>
    </>
  )
}

export default ContentLayout
