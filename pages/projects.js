import React from 'react'

import ProjectsFull from '../components/ProjectsFull'
import Head from 'next/head'

function projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <ProjectsFull />
    </>
  )
}

export default projects
