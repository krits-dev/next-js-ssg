import { ILink } from '@/types/fixes-page/types'
import { ContentLayout } from '@/layouts'
import { Title } from '@/components/UI'
import Link from 'next/link'
import { FIXES_PAGE } from '@/constants/routes.constants'
import styles from './styles.module.scss'

interface IProps {
  other_fixes: ILink[]
  title: string
}

function OtherFixesSection({ title, other_fixes }: IProps) {
  const links = other_fixes?.map(({ title, path }: ILink) => {
    let check = ''
    check = title ? title : 'API title is empty'
    return (
      <Link key={Math.random()} href={`${FIXES_PAGE}/${path}`}>
        {check}
      </Link>
    )
  })

  console.log(other_fixes)

  return (
    <section className={styles.otherFixes}>
      <ContentLayout>
        <div className={styles.title}>
          <Title
            titleH2
            text={`Other Fixes that either are related or dependent on ${title}`}
          />
          <span>Below you can find information about other fixes</span>
        </div>
        <div className={styles.links}>{links}</div>
      </ContentLayout>
    </section>
  )
}

OtherFixesSection.defaultProps = {
  other_fixes: [],
  title: '',
}

export default OtherFixesSection
