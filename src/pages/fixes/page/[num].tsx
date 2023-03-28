import { ILink } from '@/types/fixes-page/types'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { numArray } from '@/tools'
import { PageLayout } from '@/layouts'
import { DataService } from '@/services'
import { FIXES_PAGE_LIMIT } from '@/constants/api.constants'
import { FixesLinksPageContainer } from '@/containers'

interface IProps {
  fixes: ILink[]
  pageCount: number
  pageLimit: number
}

const FixesLinksPage: NextPage<IProps> = ({ fixes, pageCount }) => {
  const { query } = useRouter()
  const currentPage = query.num

  return (
    <PageLayout title={`Fixes (page ${currentPage} of ${pageCount})`}>
      <FixesLinksPageContainer fixes={fixes} pageCount={pageCount} />
    </PageLayout>
  )
}

export async function getStaticPaths() {
  const fixes = await DataService.getFixes()

  const filteredData = fixes?.map(({ _title, fixslug }: ILink) => ({
    _title,
    fixslug,
  }))

  const pageCount = Math.ceil(filteredData.length / FIXES_PAGE_LIMIT)
  const pagesArray = numArray(pageCount)

  return {
    paths: pagesArray.map(page => ({
      params: {
        num: page.toString(),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps() {
  const fixes = await DataService.getFixes()

  const filteredFixes = fixes.map(({ _title, fixslug }: ILink) => {
    return ({
      _title,
      fixslug,
    })
  })

  const pageCount = Math.ceil(filteredFixes.length / FIXES_PAGE_LIMIT)

  return {
    props: {
      fixes: filteredFixes,
      pageCount,
    },
    revalidate: 60,
  }
}
export default FixesLinksPage
