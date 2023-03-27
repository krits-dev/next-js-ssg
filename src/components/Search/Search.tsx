import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import styles from './styles.module.scss'

interface IProps {
  placeholder?: string
  value: string
  onChangeAction: Dispatch<SetStateAction<string>>
}

function Search({ placeholder, value, onChangeAction }: any) {
  const changeFilter = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeAction(event.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <input placeholder={placeholder} value={value} onChange={changeFilter} />
    </div>
  )
}

Search.defaultProps = {
  placeholder: 'Search',
  value: '',
  onChangeAction: () => null,
}

export default Search
