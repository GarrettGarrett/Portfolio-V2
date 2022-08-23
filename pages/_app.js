import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'
import Layout from '../components/Layout'
import {useEffect } from 'react'
import Script from 'next/script'


async function send() {
  const res = await fetch ("/api/send")
  const {response} = await res?.json()
  return response
}

// 



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    send()
  }, [])
  
  return (
  <>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />

    <Script strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        });
      `}
    </Script>  

    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      
    </ThemeProvider>
  </>
  )
}

export default MyApp
