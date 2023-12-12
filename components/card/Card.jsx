import BuyNow from 'BuyNowForm'
import Link from 'next/link'
import {BsCart2} from "react-icons/bs" 


function Card ({id, artist, label, producer, title, description }){
    return (
           <div class="p-6 flex">
                  <div class="flex">
                         <aside class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-wrap">
                          <div>
                                 <h2>Album Title: {title}</h2>
                                 <p>Artist: {artist}</p>
                                 <p>Producer: {producer}</p>
                                 <p>Label: {label}</p>
                                 <p>Description: {description}</p>
                                 <Link className='text-blue-600 font-semibold' href={`/record/${id}`}>View more about: {title}</Link>
                                <BuyNow/>
                          </div>
                         </aside>
                  </div>
           </div>
    )
  }


  export {Card}