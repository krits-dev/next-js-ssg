import { useState } from 'react'
import { ILink } from '@/types/fixes-page/types'
import { FixesLinks, Search, Pagination, PageNav } from '@/components'
import { Title } from '@/components/UI'
import { ContentLayout } from '@/layouts'
import styles from './styles.module.scss'

interface IProps {
  fixes: ILink[]
  pageCount: number
}

function FixesPageContainer({ fixes, pageCount }: IProps) {
  const [filterFix, setFilterFix] = useState<string>('')

  const searchResults = fixes?.filter(({ _title }: ILink) =>
    _title?.toLowerCase().includes(filterFix.toLowerCase())
  )

  return (
    <ContentLayout>
      <div className={styles.fixesPageContainer}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <PageNav />
            <Title titleH1 text='Fixes' />
            {!!filterFix ? (
              <FixesLinks search fixes={searchResults} />
            ) : (
              <FixesLinks fixes={fixes} />
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

export default FixesPageContainer
