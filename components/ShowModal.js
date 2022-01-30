/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function ShowModal({open, setOpen, project}) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-100 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-black rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center w-full rounded-lg">
                  <img src={project.imageUrl} className='rounded-lg'/>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title as="h3" className="text-xl leading-6 font-medium text-white">
                    {project.name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-lg text-gray-400">{project.role}</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 flex">
                <Link 
                target="_blank"
                rel="noreferrer"
                href={project.href} >
                    <button
                    type="button"
                    className="mr-1 inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-black border-gray-500 text-base font-medium text-gray-500  hover:border-white hover:border-1 hover:text-white sm:text-lg"
                    onClick={() => setOpen(false)}
                    >
                    View Site
                    </button>
                </Link>

                <Link 
                target="_blank"
                rel="noreferrer"
                href={project.github} >
                    <button
                    type="button"
                    className="ml-1 inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-black  sm:text-lg hover:bg-black hover:text-white border-white border-1"
                    onClick={() => setOpen(false)}
                    >
                    {project.button_title}
                    </button>
                </Link>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
