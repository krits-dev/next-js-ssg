import React from 'react'
import type { AppProps } from 'next/app'
import '@/assets/scss/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
