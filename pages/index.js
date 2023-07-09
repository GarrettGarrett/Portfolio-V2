import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import MyProfile from '../components/MyProfile'
import ProjectsGrid from '../components/ProjectsGrid'
import RecentActivity from '../components/RecentActivity'
import Footer from '../components/Footer'
import { useTheme } from 'next-themes'
import Script from 'next/script'
export default function Home() {
  const { theme, setTheme } = useTheme('dark')

  useEffect(() => {
    setTheme('dark')
  }, [])

  return (
    <>
      <Script
        id="script1"
        src="https://chatbot-one-iota.vercel.app/embed.min.js"
        strategy="beforeInteractive"
      />

      <Script id="script2" strategy="beforeInteractive">
        {`
          window.chatConfig = {
            id: "9dcf85ad-2218-407c-a8a2-586d755e4059",
          };
        `}
      </Script>

      <Head>
        <title>Garrett Felix</title>
      </Head>
      <MyProfile />
      <ProjectsGrid />
      <RecentActivity />
    </>
  )
}
