import Image from 'next/image'


export default function MyProfile() {
    return (
      <div className="flex flex-col-reverse sm:flex-row items-start">


        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white dark:text-white">Garrett Felix</h1>
          <h2 className=" text-gray-200 mb-4">Full Stack Web Developer</h2>
          <p className= "text-gray-400 mb-16">I use knowledge of programming to find creative and unique solutions to complex problems motivated by the desire to help others.</p>
        </div>


          <img 
          src="/static/images/garrett.jpg"
          className="relative w-24 md:w-32  pt-5 rounded-full mb-8 sm:mb-0 mr-auto">
              
          </img>


    </div>
        
    
    )
  }
  