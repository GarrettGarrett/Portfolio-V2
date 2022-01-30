import React from 'react';


let events2021 = [
  {
    title: 'General Assembly Software Engineering Immersive Bootcamp',
    description: '3 months of early mornings and late nights.  I learned so much from an incredibly talented team of instructors!',
  },
  {
    title: 'Married! 💍',
    description: '',
  },

]

let events2020 = [
  {
    title: 'Codecademy Python 3 Course 🐍',
    description: 'I wrote my first Hello World program in this course and have not stopped coding since!',
  },
]

let events2017 = [
  {
    title: 'Full Time at Swagerty & Gardner Financial Group',
    description: 'Here I found an interest with Excel and Excel Macros',
  },
]


let events2016 = [
  {
    title: 'Internship with Senior Financial Advisors',
    description: '',
  },
  {
    title: 'Graduated College 🎓',
    description: 'The Bachelor of Science in Business Administration at Northwest University',
  },


]


function Timeline() {
  return (
      <>
      <div className='min-h-screen'>
        <h1 className="pt-3 font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white dark:text-white">Timeline</h1>



        <ul className=''>

        <h3 className='mt-6 first-line:text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100'>2021</h3>

        {events2021.map((item) => (
              <li key={item.title} className="mb-4 ml-2">
                <div key={item.title} className="flex items-center mb-2 text-green-700 dark:text-green-300">
                    
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                    
                    <p className="font-medium text-gray-900 dark:text-gray-100">{item.title}</p>

                </div>
                      <p className="pl-2 text-gray-700 dark:text-gray-400 ml-6">{item.description}</p>
              </li>  
                  ))}

        <div key={1} className="border border-gray-200 dark:border-gray-600 w-full my-8"></div>
        <h3 className='mt-6 first-line:text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100'>2020</h3>

        {events2020.map((item) => (
              <li className="mb-4 ml-2">
                <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
                    
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                    
                    <p className="font-medium text-gray-900 dark:text-gray-100">{item.title}</p>

                </div>
                      <p className="pl-2 text-gray-700 dark:text-gray-400 ml-6">{item.description}</p>
              </li>  
                  ))}

        <div key={2} className="border border-gray-200 dark:border-gray-600 w-full my-8"></div>
        <h3 className='mt-6 first-line:text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100'>2017</h3>

        {events2017.map((item) => (
              <li className="mb-4 ml-2">
                <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
                    
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                    
                    <p className="font-medium text-gray-900 dark:text-gray-100">{item.title}</p>

                </div>
                      <p className="pl-2 text-gray-700 dark:text-gray-400 ml-6">{item.description}</p>
              </li>  
                  ))}

        <div key={3} className="border border-gray-200 dark:border-gray-600 w-full my-8"></div>
        <h3 className='mt-6 first-line:text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100'>2016</h3>
        
        {events2016.map((item) => (
              <li className="mb-4 ml-2">
                <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
                    
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                    
                    <p className="font-medium text-gray-900 dark:text-gray-100">{item.title}</p>

                </div>
                      <p className="pl-2 text-gray-700 dark:text-gray-400 ml-6">{item.description}</p>
              </li>  
                  ))}


        </ul>
        </div>
      </>
  )
}

export default Timeline;
