import Link from 'next/link'
import {BsCart2} from "react-icons/bs" 


function Card ({id, artist, label, producer, title }){
    return (
           <div class="container mx-auto p-6 flex">
                  <div class="flex items-stretch mx-4">
                         <aside class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col">
                          <div className='p-3'>
                                 <h2>Album Title:{title}</h2>
                                 <p>Artist:{artist}</p>
                                 <p>Producer:{producer}</p>
                                 <p>Label:{label}</p>
                                 <Link className='text-blue-600 font-semibold' href={`/record/${id}`}>View more about:{title}</Link>
                                 <div className='flex py-2'><a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Purchase <BsCart2 size={30}/></a></div>
                          </div>
                         </aside>
                  </div>
           </div>
    )
  }


  export {Card}