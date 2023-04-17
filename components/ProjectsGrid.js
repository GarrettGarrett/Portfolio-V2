import { useState } from 'react'
import ShowModal from '../components/ShowModal'
import Link from 'next/link'

function returnMaxChar(string, maxChar) {
  if (string?.length < maxChar) {
    return string
  } else {
    return string?.substring(0, maxChar) + '...'
  }
}

/* This example requires Tailwind CSS v2.0+ */
const projects = [
  {
    name: 'SneakerSync Email Hub',
    onlyOneButton: true,
    role: 'Automated inventory and accounting software for your reselling business.',
    imageUrl: 'https://www.sneakersync.app/share.png',
    href: 'https://whop.com/sneakersync-1/?accessPassId=prod_KZL47WzGv4HIQ',
    // github: 'https://pythonsolutions.gumroad.com/l/sneakerinventory',
    button_title: 'Whop',
    gif: 'https://www.sneakersync.app/email2sheets.gif',
  },
  {
    name: 'Bug Tracker',
    role: 'Create projects, submit tickets, and form teams to track bugs in your next software product.',
    onlyOneButton: false,
    imageUrl: '/static/images/bug_tracker.png',
    href: 'https://bug-tracker-tau.vercel.app/',
    github: 'https://github.com/GarrettGarrett/bug-tracker',
    button_title: 'Github',
    gif: 'static/images/buggif.gif',
  },
  {
    name: 'Sneaker Scanner',
    onlyOneButton: false,
    role: 'This tool was created after searching Google for "StockX Scanner" and finding no results. My hope is this tool can make inventory management easier for fellow sneaker resellers',
    imageUrl: '/static/images/sneakerscanlandingpage.png',
    href: 'https://sneaker-upc-api.vercel.app',
    github: 'https://github.com/GarrettGarrett/sneaker-upc-api',
    button_title: 'Github',
    gif: 'static/images/sneakerscangif.gif',
  },
  {
    name: 'Dutch Bros Drink Generator',
    onlyOneButton: false,
    role: 'Random drink generator for Dutch Bros Coffee.',
    imageUrl: '/static/images/dutchbros.png',
    href: 'https://dutch-bros-drink-generator.vercel.app/',
    github: 'https://github.com/GarrettGarrett/dutch-bros-drink-generator',
    button_title: 'Github',
    gif: 'static/images/coffegif.gif',
  },
  // More projects...
]

export default function ProjectsGrid() {
  const [open, setOpen] = useState(false)
  const [project, setProject] = useState(false)
  const [hovering, setHovering] = useState(-1)

  return (
    <>
      <ShowModal open={open} setOpen={setOpen} project={project} />
      <h1 className="mb-1 pb-5 text-2xl font-bold tracking-tight text-white dark:text-white md:text-4xl">
        Featured Projects
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
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
            className="focus-within:ring-3 focus-within:ring-offset-3 relative items-center  space-x-0 rounded-xl border border-gray-600 
            px-4 py-4
            shadow-sm focus-within:ring-white 
            hover:border-white sm:px-6 sm:py-5 "
          >
            <div className="flex-shrink-0 ">
              {hovering == index ? (
                <img className="w-full rounded-lg " src={project.gif} alt="" />
              ) : (
                <img
                  className="w-full rounded-lg"
                  src={project.imageUrl}
                  alt=""
                />
              )}
            </div>
            <div
              className="-mb-4 min-w-0 flex-1 overflow-hidden 
            pt-4 sm:-mb-0 "
            >
              <div className="focus:outline-none ">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="my-2 py-0 text-sm font-medium text-white ">
                  {project.name}
                </p>
                <p className="   py-4 text-sm text-gray-400 sm:py-0">
                  {returnMaxChar(project.role, 60)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/projects">
        <a className="mt-7 flex h-6 rounded-lg leading-7 text-gray-600 transition-all hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
          View all projects &rarr;
        </a>
      </Link>
    </>
  )
}
