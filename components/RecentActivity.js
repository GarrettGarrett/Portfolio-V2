/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon, ChevronRightIcon, MailIcon } from '@heroicons/react/solid'

const recent_activities = [
  {
    applicant: {
      name: 'Using Python To Find Giveaways on Instagram',
      description: 'Yesterday I made a program to search for giveaways on Instagram! Built with Python, JavaScript, and Next.js API routes, this script will iterate through the following list for an Instagram account and check for posts within the past week containing the word “giveaway.” In the screenshot below I enter CitySolesLLC and all 507 accounts CitySolesLLC is following are scanned resulting in 10 giveaways found! #javascript #python',
      imageUrl:
        '/static/images/linkedin.png',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: 'https://www.linkedin.com/posts/garrettfelix_javascript-python-activity-6875532757418827776-Se00',
  },
//   {
//     applicant: {
//       name: 'Feature Request - Shopify Integration',
//       description: "This feature request posted on Scout's feedback forum has 40 votes for implementation. Using Shopify webhooks and Next.js API routes I was able to solve this problem and add this feature!",
//       imageUrl:
//         '/static/images/linkedin.png',
//     },
//     date: '2020-01-07',
//     dateFull: 'January 7, 2020',
//     stage: 'Completed phone screening',
//     href: '#',
//   },
  {
    applicant: {
      name: 'Feature Request - Export to Shopify.csv',
      description: "Demo: https://lnkd.in/gpz4_nMD I programmed a solution to a problem posted by this user on Scout's feature suggestion forum. This online tool will save time by converting Scout inventory.csv files into Shopify.csv files!",
      imageUrl:
        '/static/images/linkedin.png',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: 'https://www.linkedin.com/posts/garrettfelix_nextjs-javascript-activity-6879875289028153344-ILuG',
  },
  {
    applicant: {
      name: 'Automate Instagram Store Inventory with Python and Tesseract OCR',
      description: "Here is another program I built aimed at helping sneaker resellers! (Specifically those who manage their inventory with Scout and post shoes for sale on Instagram) Here is how the program works:      1) A Python script monitors your Instagram story for new shoes posted for sale. 2) Tesseract OCR is used to convert the Instagram story images into text. 3) Details for that shoe are collected via StockX and a web form is generated with Next.js. 4) You then receive a Discord message with a link to the web form created above. 5) After confirming the shoe details are correct, the items are added to your Scout inventory! #python #nextjs #javascript",
      imageUrl:
        '/static/images/linkedin.png',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: 'https://www.linkedin.com/posts/garrettfelix_python-nextjs-javascript-activity-6877378571740991488-cYs7',
  },
 
]

export default function RecentActivity() {
  return (

    <div className="pt-16 shadow overflow-hidden sm:rounded-md">
    <h1 className="pb-5 font-bold text-2xl md:text-4xl tracking-tight mb-1 text-white dark:text-white">Smaller Projects</h1>
      <ul role="list" className="divide-y divide-gray-200">
        {recent_activities.map((application) => (
          <li key={application.applicant.description} className='transition duration-150 hover:-translate-y-0.5 '>
            <a 
            target="_blank"
            rel="noreferrer"
            href={application.href} className="block ">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-8 w-8 hover:opacity-70" src={application.applicant.imageUrl} alt="" />
                  </div>
                  <div className="overflow-hidden mr-10 min-w-0 flex-1 px-4 md:grid  md:gap-4">
                    <div>
                      <p className="text-lg font-medium text-white truncate">{application.applicant.name}</p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 ">
                        
                        <span className="truncate ">{application.applicant.description}</span>
                      </p>
                    </div>
                    
                   
                  </div>
                </div>
                <div>
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <a href="https://www.linkedin.com/in/garrettfelix/recent-activity/shares/" 
      target="_blank"
      rel="noreferrer"
      className="flex mt-7 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">View all &rarr;</a>
      
    </div>
  )
}
