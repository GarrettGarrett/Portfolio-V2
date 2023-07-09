import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import MyProfile from '../components/MyProfile'
import ProjectsGrid from '../components/ProjectsGrid'
import RecentActivity from '../components/RecentActivity'
import { useTheme } from 'next-themes'
import Script from 'next/script'

export default function Home() {
  const { theme, setTheme } = useTheme('dark')

  useEffect(() => {
    setTheme('dark')
  }, [])

  return (
    <>
      <Script src="/chatConfig.js" strategy="beforeInteractive" />
      <Script
        // src="http://localhost:3003/embed.js"
        src="https://chatbot-one-iota.vercel.app/embed.min.js"
        strategy="beforeInteractive"
      />

      <Head>
        <title>Garrett Felix</title>
      </Head>
      <MyProfile />
      <ProjectsGrid />
      <RecentActivity />
    </>
  )
}
