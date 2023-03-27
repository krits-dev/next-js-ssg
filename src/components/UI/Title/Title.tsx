import { memo } from 'react'
import styles from './styles.module.scss'

interface IProps {
  text: string
  page?: boolean
  titleH1?: boolean
  titleH2?: boolean
  titleH3?: boolean
  titleH4?: boolean
}

function Title({ text, page, titleH1, titleH2, titleH3, titleH4 }: IProps) {
  return (
    <div className={styles.title}>
      {page && (
        <div className={styles.page}>
          <h1>{text}</h1>
        </div>
      )}
      {titleH1 && (
        <div className={styles.titleH1}>
          <h1>{text}</h1>
        </div>
      )}
      {titleH2 && (
        <div className={styles.titleH2}>
          <h2>{text}</h2>
        </div>
      )}
      {titleH3 && (
        <div className={styles.titleH3}>
          <h3>{text}</h3>
        </div>
      )}
      {titleH4 && (
        <div className={styles.titleH4}>
          <h4>{text}</h4>
        </div>
      )}
    </div>
  )
}

Title.defaultProps = {
  text: '',
  page: false,
  titleH1: false,
  titleH2: false,
  titleH3: false,
  titleH4: false,
}

export default memo(Title)
