import { ILink } from '@/types/fixes-page/types'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { FIXES_PAGE_LIMIT } from '@/constants/api.constants'
import { FixesLinks, Search, Pagination, PageNav } from '@/components'
import { Title } from '@/components/UI'
import { ContentLayout } from '@/layouts'
import styles from './styles.module.scss'

interface IProps {
  fixes: ILink[]
  pageCount: number
}

function FixesLinksPageContainer({ fixes = [], pageCount = 1 }: IProps) {
  const [filterFix, setFilterFix] = useState<string>('')

  const { query } = useRouter()
  const currentPage = Number(query.num)

  let start = (currentPage - 1) * FIXES_PAGE_LIMIT
  let end = currentPage * FIXES_PAGE_LIMIT

  const searchResults = fixes?.filter(({ _title }: ILink) =>
    _title?.toLowerCase().includes(filterFix.toLowerCase())
  )

  return (
    <ContentLayout>
      <div className={styles.fixesLinksPageContainer}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <PageNav />
            <Title titleH1 text='Fixes' />
            {!!filterFix ? (
              <FixesLinks search fixes={searchResults} />
            ) : (
              <FixesLinks fixes={fixes} start={start} end={end} />
            )}
          </div>
          <div className={styles.right}>
            <Search value={filterFix} onChangeAction={setFilterFix} />
          </div>
        </div>
        {!filterFix ? <Pagination pageCount={pageCount} /> : null}
      </div>
    </ContentLayout>
  )
}

export default FixesLinksPageContainer
