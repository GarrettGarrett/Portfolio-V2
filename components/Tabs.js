import Link from 'next/link'
import { useState } from 'react'


const tabs = [
    { name: 'Home', href: '/', index: 0 },
    { name: 'Timeline', href: '/timeline', index: 1 },
    { name: 'Projects', href: '/projects', index: 2 },
    { name: 'Activity', href: 'https://www.linkedin.com/in/garrettfelix/recent-activity/shares/', index: 3 },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Tabs({selected, setSelected}) {

    // const [selected, setSelected] = useState(0)

    return (
      <div >
        <div className="invisible md:visible" >
          <nav className="flex space-x-4 -ml-3" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link 
              key={tab.href}
              href={tab.href} >
              <a
                onClick={(e) => {
                    const index = tabs.findIndex(object => {
                        return object.name === e.target.text;
                      });
                      setSelected(index)
                      console.log("selected", index)
                }}
                key={tab.name}
                target={tab.href.length > 20 ? "_blank" : null}
                rel="noreferrer"
                className={classNames(
                  tab.index == selected ?' font-bold text-white  hover:bg-gray-800' : 'font-bold text-gray-400 hover:bg-gray-800' ,
                  'px-3 py-1.5 font-medium rounded-md  text-l '
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    )
  }
  