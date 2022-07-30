import { useState } from 'react'
import ShowModal from '../components/ShowModal'
import Link from 'next/link'

function returnMaxChar(string, maxChar){
  if (string?.length < maxChar){
    return string
  } else {
    return string?.substring(0, maxChar) + "..."
  }
}

/* This example requires Tailwind CSS v2.0+ */
const projects = [
  {
    name: 'Bug Tracker',
    role: 'Create projects, submit tickets, and form teams to track bugs in your next software product.',
    onlyOneButton: false,
    imageUrl:
      '/static/images/bug_tracker.png',
      href: 'https://bug-tracker-tau.vercel.app/',
      github: 'https://github.com/GarrettGarrett/bug-tracker',
      button_title:"Github",
    gif: 'static/images/buggif.gif'
  },
  {
    name: 'Sneaker Scanner',
    onlyOneButton: false,
    role: 'This tool was created after searching Google for "StockX Scanner" and finding no results. My hope is this tool can make inventory management easier for fellow sneaker resellers',
    imageUrl:
      '/static/images/sneakerscanlandingpage.png',
      href: 'https://www.sneakerscan.io',
      github: 'https://github.com/GarrettGarrett/sneaker-upc-api',
      button_title:"Github",
    gif: 'static/images/sneakerscangif.gif'
  },
  {
    name: 'Dutch Bros Drink Generator',
    onlyOneButton: false,
    role: 'Random drink generator for Dutch Bros Coffee.',
    imageUrl:
      '/static/images/dutchbros.png',
      href: 'https://dutch-bros-drink-generator.vercel.app/',
      github: 'https://github.com/GarrettGarrett/dutch-bros-drink-generator',
      button_title:"Github",
    gif: 'static/images/coffegif.gif'
  },
    // More projects...
  ]
  
  export default function ProjectsGrid() {
    const [open, setOpen] = useState(false)
    const [project, setProject] = useState(false)
    const [hovering, setHovering] = useState(-1)

    return (
        <>
        <ShowModal open={open} setOpen={setOpen} project={project}/>
     <h1 className="pb-5 font-bold text-2xl md:text-4xl tracking-tight mb-1 text-white dark:text-white">Featured Projects</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          
        {projects.map((project, index) => (
          <div
            onMouseEnter={() => {
              setHovering(index)
            }}
            onMouseLeave={() => setHovering(-1)}
            onClick={(e) => {
                setProject(project)
                setOpen(true)               
            }}
            key={project.name}
            className="relative rounded-xl border border-gray-600  px-6 py-5 shadow-sm items-center space-x-3 hover:border-white focus-within:ring-3 focus-within:ring-offset-3 focus-within:ring-white"
          >
            <div className="flex-shrink-0">
              {
                hovering == index ? 
                <img className="w-full rounded-lg " src={project.gif} alt="" />
                :
                <img className="w-full rounded-lg" src={project.imageUrl} alt="" />
              }
            </div>
            <div className="pt-4 -mb-4 sm:-mb-0 flex-1 min-w-0 h-32 overflow-hidden">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className=" py-2 text-lg font-medium text-white ">{project.name}</p>
                <p className=" text-sm text-gray-400 ">{returnMaxChar(project.role, 60)}</p>
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
  