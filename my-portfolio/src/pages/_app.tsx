import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Michael W Howell</title>
      <meta name="description" content="Personal portfolio for Michael W Howell - software developer" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
