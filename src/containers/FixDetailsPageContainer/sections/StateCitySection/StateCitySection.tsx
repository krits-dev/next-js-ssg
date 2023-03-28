import { IStates } from '@/types/fixes-page/types'
import { ContentLayout } from '@/layouts'
import { Title } from '@/components/UI'
import Link from 'next/link'
import { FIXES_PAGE } from '@/constants/routes.constants'
import styles from './styles.module.scss'

interface IProps {
  states: IStates[]
  title: string
  isColumn: boolean
}

function StateCitySection({ states = [], title, isColumn }: IProps) {
  const statesLinks = states?.map(({ id, state, path }: IStates) => (
    <Link key={id} href={`${FIXES_PAGE}/${path}`}>
      {state}
    </Link>
  ))

  return (
    <section className={styles.stateCity}>
      <ContentLayout>
        <div className={styles.border}>
          <Title
            titleH3
            text='Select the state and town where this fix should be performed'
          />
        </div>
        <Title titleH4 text={`${title} in States of`} />
        <div
          className={`${styles.states} ${
            isColumn ? styles.column : styles.spaceBetween
          }`}
        >
          {statesLinks}
        </div>
      </ContentLayout>
    </section>
  )
}

StateCitySection.defaultProps = {
  states: [],
  title: '',
  isColumn: false,
}

export default StateCitySection
