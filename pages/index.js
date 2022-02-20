import Head from 'next/head'
import { useState, useEffect } from 'react';
import Header from '../components/Header'
import MyProfile from '../components/MyProfile'
import ProjectsGrid from '../components/ProjectsGrid'
import RecentActivity from '../components/RecentActivity'
import Footer from '../components/Footer'
import { useTheme } from 'next-themes';
import Link from 'next/link'


export default function Home() {

  const { theme, setTheme } = useTheme("dark"); 
  
  useEffect(() => {
    setTheme('dark');
  }, []);


  return (
        <>
          <MyProfile />
          <ProjectsGrid />
          <div className='absolute bg-earth bg-cover p-2 rounded-full'></div>
          <RecentActivity />
        </>    
  )
}
