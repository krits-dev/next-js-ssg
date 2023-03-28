import Link from 'next/link'
import { ILink} from '@/types/fixes-page/types'
import { FIXES_PAGE_LIMIT } from '@/constants/api.constants'
import { FIXES_PAGE } from '@/constants/routes.constants'
import styles from './styles.module.scss'

export interface IFix {
  _title?: string
  fixslug: string
}

interface IProps {
  fixes: ILink[]
  start?: number
  end?: number
  search?: boolean
}

function FixesLinks({ fixes, start, end, search }: IProps) {
  const fixesLinks = fixes?.map(({ fixslug, _title }: ILink) => {
    return (
      <Link key={_title} href={`${FIXES_PAGE}/${fixslug}`}>
        {_title}
      </Link>
    )
  })

  const fixesLinksPerPage = fixesLinks.slice(start, end)

  return (
    <div className={styles.wrapper}>
      {search ? fixesLinks : fixesLinksPerPage}
    </div>
  )
}

FixesLinks.defaultProps = {
  fixes: [],
  start: 0,
  end: FIXES_PAGE_LIMIT,
  search: false,
}

export default FixesLinks
