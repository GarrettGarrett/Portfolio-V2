import React from 'react';
import { useState } from 'react'
import ShowModal from '../components/ShowModal'

function returnMaxChar(string, maxChar){
  if (string?.length < maxChar){
    return string
  } else {
    return string?.substring(0, maxChar) + "..."
  }
}

const projects = [
  {
    name: 'Discord Bot',
    onlyOneButton: true,
    role: 'This Discord bot allows you to manage your sneaker reselling inventory by scanning barcodes on sneaker boxes.  Add items or mark them as sold using a barcode reader.  All inventory updates are automatically reflected in your Google Sheet.',
    imageUrl:
      '/static/images/discordBot.png',
      href: 'https://pythonsolutions.gumroad.com/l/sneakerinventory',
      github: 'https://pythonsolutions.gumroad.com/l/sneakerinventory',
      button_title:"Gumroad"
  },
  {
    name: 'Bug Tracker',
    role: 'Create projects, submit tickets, and form teams to track bugs in your next software product.',
    onlyOneButton: false,
    imageUrl:
      '/static/images/bug_tracker.png',
      href: 'https://bug-tracker-tau.vercel.app/',
      github: 'https://github.com/GarrettGarrett/bug-tracker',
      button_title:"Github"
  },
  {
    name: 'Dutch Bros Drink Generator',
    onlyOneButton: false,
    role: 'Random drink generator for Dutch Bros Coffee.',
    imageUrl:
      '/static/images/dutchbros.png',
      href: 'https://dutch-bros-drink-generator.vercel.app/',
      github: 'https://github.com/GarrettGarrett/dutch-bros-drink-generator',
      button_title:"Github"
  },
  {
    name: 'Sneaker Scanner',
    onlyOneButton: false,
    role: 'This tool was created after searching Google for "StockX Scanner" and finding no results. My hope is this tool can make inventory management easier for fellow sneaker resellers',
    imageUrl:
      '/static/images/sneakerscanlandingpage.png',
      href: 'https://www.sneakerscan.io/',
      github: 'https://github.com/GarrettGarrett/sneaker-upc-api',
      button_title:"Github"
  },
  {
    name: 'Movie Cast Tweets',
    onlyOneButton: false,
    role: 'A Web Application to Discover the Twitter Activity for the Casts of your Favorite Movies & TV Shows.',
    imageUrl:
      '/static/images/movietweets.png',
      href: 'https://movie-tweets.vercel.app/',
      github: 'https://github.com/GarrettGarrett/MovieTweets',
      button_title:"Github"
  },
  {
    name: 'Portfolio Site v2',
    onlyOneButton: false,
    role: 'Updated Portfolio Site',
    imageUrl:
      '/static/images/profilev2.png',
      href: 'https://www.garrettfelix.com/',
      github: 'https://github.com/GarrettGarrett/Portfolio-V2',
      button_title:"Github"
  },
  {
    name: 'Convert Scout.csv to Shopify.csv',
    onlyOneButton: false,
    role: `Online conversion tool created to solve a problem posted on Scout's Feature Suggestion Board.`,
    imageUrl:
      '/static/images/scout2shopify.png',
      href: 'https://scout2shopify.vercel.app/',
      github: 'https://github.com/GarrettGarrett/scout2shopify',
      button_title:"Github"
  },
  {
    name: 'Headless Shopify Storefront',
    onlyOneButton: false,
    role: 'Developed for City Soles LLC',
    imageUrl:
      '/static/images/shopify store.png',
      href: 'https://shopify-storefront-next.vercel.app/',
      github: 'https://github.com/GarrettGarrett/nextjs-shoify',
      button_title:"Github"
  },
  {
    name: 'Inventory Management',
    onlyOneButton: false,
    role: 'For helping sneaker resellers manage their inventory and sales',
    imageUrl:
    '/static/images/inventory.png',
    href: 'https://inventory-app-six-lake.vercel.app/inventory',
    github: 'https://inventory-app-guide.vercel.app/',
    button_title:"Walkthrough"
  },
  {
    name: "Where's Waldo?",
    onlyOneButton: false,
    role: 'Search for Waldo in 15 different scenes as your score is timed and posted on the Highscore board',
    imageUrl:
    '/static/images/waldo.png',
    href:'https://wheres-waldo1.herokuapp.com/',
    github:'https://github.com/GarrettGarrett/Wheres-Waldo',
    button_title:"Github"
    
  },
  {
    name: "Team Scheduler",
    onlyOneButton: false,
    role: 'A Django web application that helps teams with different schedules find times to meet.',
    imageUrl:
    '/static/images/teamscheduler.png',
    href:'https://django-team-scheduler.herokuapp.com/',
    github:'https://github.com/GarrettGarrett/Team-Scheduler',
    button_title:"Github"
  },
  {
    name: "Persian Recipe Food App",
    onlyOneButton: false,
    role: 'The Persian Recipe Food App is built with React and styled with Material-ui and Styled components. This app displays a collection of recipes highlighting Iranian Cuisine on the Index page. Each dish is showcased in a Show page and has update and delete functionality New recipes may be created and added to the list from a form located on the Index page. Users can also upload their own image to a new recipe via Cloudinary. ',
    imageUrl:
    '/static/images/persianrecipe.png',
    href:'https://cocky-aryabhata-964b73.netlify.app/',
    github:'https://github.com/GarrettGarrett/persian-food-recipe-frontend',
    button_title:"Github"
  },
  {
    name: "Chore Wheel",
    onlyOneButton: false,
    role: 'A responsive web application that helps roommates allocate their house responsibilities',
    imageUrl:
    '/static/images/chorewheel.png',
    href:'https://project-3-heroku-app.herokuapp.com/',
    github:'https://github.com/GarrettGarrett/Project-3',
    button_title:"Github"
  },
  {
    name: "This Day In History",
    onlyOneButton: false,
    role: 'This is my first developer project with General Assembly! Discover the events, deaths, and births that occurred today in history. Each result includes hyperlinks to their corresponding pages on Wikipedia',
    imageUrl:
    '/static/images/project1.png',
    href: 'https://garrettgarrett.github.io/Project1-On-This-Day/',
    github: 'https://github.com/GarrettGarrett/Project1-On-This-Day',
    button_title:"Github"
  },
  // More projects...
]



function ProjectsFull() {
  const [open, setOpen] = useState(false)
  const [project, setProject] = useState(false)

  return (

  <div className='min-h-screen'>
        <ShowModal open={open} setOpen={setOpen} project={project}/>

    <h1 className="mb-6 pt-3 font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white dark:text-white">Projects</h1>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          
          {projects.map((project) => (
            <div
              onClick={(e) => {
                setProject(project)
                setOpen(true)               
            }}
              key={project.name}
              className="relative rounded-lg border border-gray-600  px-6 py-5 shadow-sm items-center space-x-3 hover:border-white focus-within:ring-3 focus-within:ring-offset-3 focus-within:ring-white"
            >
              <div className="flex-shrink-0">
                <img className="w-full rounded-lg" src={project.imageUrl} alt="" />
              </div>
              <div className="pt-4 flex-1 -mb-4 sm:-mb-0 min-w-0 h-32 overflow-hidden">
                <a href="#" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className=" py-2 text-lg font-medium text-white ">{project.name}</p>
                  <p className="text-sm text-gray-400">{returnMaxChar(project.role, 60)}</p>
                </a>
              </div>
            </div>
          ))}
        </div>

  </div>
  )
}

export default ProjectsFull;
