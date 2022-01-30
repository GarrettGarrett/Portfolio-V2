/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, MenuAlt4Icon } from '@heroicons/react/solid'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MenuDropDown() {
  return (
    <Menu as="div" className="relative inline-block z-10">
      <div>
        <Menu.Button className="flex ">
          
          <MenuAlt4Icon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform  scale-95"
        enterTo="transform  scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform  scale-100"
        leaveTo="transform  scale-95"
      >
        <Menu.Items className="bg-white bg-opacity-95 divide-y divide-gray-800 origin-top-left absolute   w-auto rounded-md   ring-1 ring-black ring-opacity-5  focus:outline-none">
         
              <div>
            <Menu.Item>
              {({ active }) => (
                <Link href={'/'}>
                  <a
                    
                    className={classNames(
                      active ? 'bg-white text-black ' : 'text-black',
                      'block px-4 py-2 text-sm', 'hover:cursor-pointer'
                    )}
                  >
                    Home
                  </a>
                </Link>
              )}
            </Menu.Item>
            </div>
            <Menu.Item>
              {({ active }) => (
                <Link href={'/timeline'}>
                  <a
                    
                    className={classNames(
                      active ? 'bg-white text-black' : 'text-black',
                      'block px-4 py-2 text-sm', 'hover:cursor-pointer'
                    )}
                  >
                    Timeline
                  </a>
                </Link>
              )}
            </Menu.Item>
          
        
            <Menu.Item>
              {({ active }) => (
                <Link href={'/projects'}>
                  <a
                    
                    className={classNames(
                      active ? 'bg-white text-black' : 'text-black',
                      'block px-4 py-2 text-sm', 'hover:cursor-pointer'
                    )}
                  >
                    Projects
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
               
                  <a
                  href='https://www.linkedin.com/in/garrettfelix/recent-activity/shares/'
                    target="_blank"
                    rel="noreferrer"
                    className={classNames(
                      active ? 'bg-white text-black' : 'text-black',
                      'block px-4 py-2 text-sm', 'hover:cursor-pointer'
                    )}
                  >
                    Activity
                  </a>
              
              )}
            </Menu.Item>
            
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
