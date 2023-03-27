import Head from 'next/head'
import { Header, Footer } from '@/components'
import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface IProps {
  children: ReactNode
  title?: string
  description?: string
  keywords?: string
}

function PageLayout({
  children,
  title,
  description,
  keywords,
}: IProps) {
  return (
    <>
      <Head>
        <title>{title || 'Auto Tech IQ'}</title>
        <meta name='description' content={`Auto Tech IQ` + description} />
        <meta name='robots' content='index, follow' />
        <meta name='keywords' content={keywords || 'Auto Tech IQ'} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Header />
      <div className={styles.pageLayout}>{children}</div>
      <Footer />
    </>
  )
}

export default PageLayout
