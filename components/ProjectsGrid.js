import { useState } from 'react'
import ShowModal from '../components/ShowModal'
import Link from 'next/link'

/* This example requires Tailwind CSS v2.0+ */
const projects = [
  {
    name: 'Headless Shopify Storefront',
    role: 'Developed for City Soles LLC',
    imageUrl:
      '/static/images/shopify store.png',
      href: 'https://shopify-storefront-next.vercel.app/',
      github: 'https://github.com/GarrettGarrett/nextjs-shoify',
      button_title:"Github"
  },
  {
    name: 'Movie Cast Tweets',
    role: 'A Web Application to Discover the Twitter Activity for the Casts of your Favorite Movies & TV Shows.',
    imageUrl:
      '/static/images/movietweets.png',
      href: 'https://movie-tweets.vercel.app/',
      github: 'https://github.com/GarrettGarrett/MovieTweets',
      button_title:"Github"
  },
  {
    name: 'Sneaker Scanner',
    role: 'This tool was created after searching Google for "StockX Scanner" and finding no results. My hope is this tool can make inventory management easier for fellow sneaker resellers',
    imageUrl:
      '/static/images/sneakerscan.png',
      href: 'https://www.sneakerscan.io/stockxscanner',
      github: 'https://github.com/GarrettGarrett/sneaker-upc-api',
      button_title:"Github"
  },
    // More projects...
  ]
  
  export default function ProjectsGrid() {
    const [open, setOpen] = useState(false)
    const [project, setProject] = useState(false)

    return (
        <>
        <ShowModal open={open} setOpen={setOpen} project={project}/>
     <h1 className="pb-5 font-bold text-2xl md:text-4xl tracking-tight mb-1 text-white dark:text-white">Featured Projects</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          
        {projects.map((project) => (
          <div
            onClick={(e) => {
                setProject(project)
                setOpen(true)               
            }}
            key={project.name}
            className="relative rounded-xl border border-gray-600  px-6 py-5 shadow-sm items-center space-x-3 hover:border-white focus-within:ring-3 focus-within:ring-offset-3 focus-within:ring-white"
          >
            <div className="flex-shrink-0">
              <img className="w-full rounded-lg" src={project.imageUrl} alt="" />
            </div>
            <div className="pt-4 flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="-ml-2 py-3 text-lg font-medium text-white">{project.name}</p>
                <p className="-ml-2 text-lg text-gray-400 truncate">{project.role}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Link
      href="/projects" 
      >
      <a className="flex mt-7 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">View all projects &rarr;</a>
      </Link>

      </>
    )
  }
  