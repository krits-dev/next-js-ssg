import { memo, SyntheticEvent } from 'react'
import styles from './styles.module.scss'

interface IProps {
  text: string
  onClickAction?: (e: SyntheticEvent) => void
}

function Button({ text, onClickAction }: IProps) {
  return (
    <div className={styles.button}>
      <button onClick={onClickAction}>{text}</button>
    </div>
  )
}

Button.defaultProps = {
  text: '',
  onClickAction: () => null,
}

export default memo(Button)
