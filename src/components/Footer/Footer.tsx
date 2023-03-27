import { ContentLayout } from '@/layouts'
import styles from './styles.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ContentLayout>
        <div className={styles.logo} />
      </ContentLayout>
    </footer>
  )
}

export default Footer
