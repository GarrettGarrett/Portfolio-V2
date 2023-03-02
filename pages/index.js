import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import MyProfile from '../components/MyProfile'
import ProjectsGrid from '../components/ProjectsGrid'
import RecentActivity from '../components/RecentActivity'
import Footer from '../components/Footer'
import { useTheme } from 'next-themes'

export default function Home() {
  const { theme, setTheme } = useTheme('dark')

  useEffect(() => {
    setTheme('dark')
  }, [])

  return (
    <>
      <Head>
        <title>Garrett Felix</title>
      </Head>
      <MyProfile />
      <ProjectsGrid />
      <RecentActivity />
    </>
  )
}
