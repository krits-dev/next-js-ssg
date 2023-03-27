import { ContentLayout } from '@/layouts'
import Link from 'next/link'
import { FIXES_PAGE } from '@/constants/routes.constants'
import styles from './styles.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <ContentLayout>
        <div className={styles.wrapper}>
          <div className={styles.logo} />
          <div className={styles.menuItem}>Why AutoTechIQ</div>
          <div className={styles.menuItem}>
            <Link href={FIXES_PAGE}>Fixes</Link>
          </div>
          <div className={styles.menuItem}>Shops Near You</div>
          <div className={styles.menuItem}>Vehicle Symptoms</div>
          <div className={styles.number}>(866)678-8505</div>
        </div>
      </ContentLayout>
    </header>
  )
}

export default Header
