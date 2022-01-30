import React from 'react';

function Footer() {
  return (
      <>
        <div className='mt-28 border-t border-gray-800 mb-12'></div>
            <div className=' w-full max-w-2xl grid grid-cols-5 gap-4 pb-16 sm:grid-cols-5'>
                <div className='flex flex-col space-y-4'>
                    <a className="text-gray-500 hover:text-gray-600 transition" href="/">Timeline</a>
                </div>

                <div className='flex flex-col space-y-4'>
                    <a className="text-gray-500 hover:text-gray-600 transition" href="/">Projects</a>
                </div>

                <div className='flex flex-col space-y-4'>
                     <a className="text-gray-500 hover:text-gray-600 transition" href="/">Activity</a>                
                </div>

                <div className='flex flex-col space-y-4'>
                    <a className="text-gray-500 hover:text-gray-600 transition" target="_blank"
                    rel="noreferrer" href="https://github.com/GarrettGarrett">GitHub</a>
                </div>
                <div className='flex flex-col space-y-4'>
                    <a className="text-gray-500 hover:text-gray-600 transition" target="_blank"
                    rel="noreferrer" href="https://www.linkedin.com/in/garrettfelix/">LinkedIn</a>
                </div>
                
        </div>

    </>
  )
  

 
 
}

export default Footer;
