import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { PageLayout } from '@/layouts'
import { DataService } from '@/services'
import { FixesPageContainer } from '@/containers'
import {IFixLink} from '@/types/fixes-page/types'
import { FIXES_PAGE_LIMIT } from '@/constants/api.constants'


interface IProps {
  fixes: IFixLink[]
  pageCount: number
}

const FixesPage: NextPage<IProps> = ({ fixes = [], pageCount = 1 }) => {
  const router = useRouter()

  return (
    <PageLayout title={`Fixes (page 1 of ${pageCount})`}>
      <FixesPageContainer fixes={fixes} pageCount={pageCount} />
    </PageLayout>
  )
}

export async function getStaticProps() {
  const fixes = await DataService.GetFixes()

  const fixesLinks = fixes.map(({ fixslug, _title }: IFixLink) => ({
    fixslug,
    _title,
  }))

  const pageCount = Math.ceil(fixesLinks.length / FIXES_PAGE_LIMIT)

  return {
    props: {
      fixes: fixesLinks,
      pageCount,
    },
  }
}

export default FixesPage
