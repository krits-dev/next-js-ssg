import { useMemo } from 'react'
import Link from 'next/link'
import { numArray } from '@/tools'
import { FIXES_PAGE, PAGE_PAGE } from '@/constants/routes.constants'
import styles from './styles.module.scss'

interface IProps {
  pageCount: number
}

function Pagination({ pageCount = 1 }: IProps) {
  const pagesArray = useMemo(() => numArray(pageCount), [pageCount])

  return (
    <div className={styles.wrapper}>
      {pagesArray.map(page => (
        <Link key={page} href={FIXES_PAGE + PAGE_PAGE + page.toString()}>
          {page}
        </Link>
      ))}
    </div>
  )
}

export default Pagination
