import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from 'next-themes'
import Layout from '../components/Layout'
import {useEffect } from 'react'

async function send() {
  const res = await fetch ("/api/send")
  const {response} = await res?.json()
  return response
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    send()
  }, [])
  
  return (
  <>
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      
    </ThemeProvider>
  </>
  )
}

export default MyApp
