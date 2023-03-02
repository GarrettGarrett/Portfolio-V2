import Image from 'next/image'

export default function MyProfile() {
  return (
    <div className="flex flex-col-reverse items-start sm:flex-row">
      <div className="flex flex-col pr-8">
        <h1 className="-ml-1 mb-1 text-3xl font-bold tracking-tight text-white dark:text-white md:text-5xl">
          Garrett Felix
        </h1>
        <h2 className=" mb-4 text-gray-200">Full Stack Web Developer</h2>
        <p className="mb-16 text-gray-400">
          I use my knowledge of programming to find creative and unique
          solutions to complex problems motivated by the desire to help others.
        </p>
      </div>

      <img
        src="/static/images/garrett.jpg"
        className="h-28 mb-8 sm:h-full rounded-full  "
      ></img>
    </div>
  )
}
