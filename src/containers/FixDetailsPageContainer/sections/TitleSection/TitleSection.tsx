import { ContentLayout } from '@/layouts'
import { Title, Button } from '@/components/UI'
import { IFixData } from '@/types/fixes-page/types.js'
import Image from 'next/image'
import styles from './styles.module.scss'

interface IProps {
  title: string
  image: string
}

function TitleSection({ title, image }: IProps) {
  return (
    <section className={styles.title}>
      <div className={styles.leftBG} />
      <Image src={image} alt={title} fill />
      <ContentLayout>
        <Button text='Car Smells' />
        <Title page text={title} />
      </ContentLayout>
      <div className={styles.roundPercent}>
        <span>3.0%</span>
        of all vehicles experience that
      </div>
    </section>
  )
}

export default TitleSection
