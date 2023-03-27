import { INDEX_PAGE } from '@/constants/routes.constants'
import Link from 'next/link'

import styles from './styles.module.scss'

function PageNav() {
  return (
    <div className={styles.pageNav}>
      <Link href={INDEX_PAGE}>Home</Link>&nbsp;&nbsp;/&nbsp;&nbsp;Fixes
    </div>
  )
}

export default PageNav
