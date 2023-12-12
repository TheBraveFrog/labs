import Link from 'next/link'
import BuyNow from 'BuyNowForm'


function SingleRecordCard ({artist, description, label, producer, rating, release_date, sales, title, tracks }){

    return (
           <aside  class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
           <h2>Title: {title}</h2>
            <p>Artist: {artist}</p>
            <p>Producer: {producer}</p>
            <p>Label: {label}</p>
            <p>Release Date: {release_date}</p>
            <p>{description}</p>
            <p>Tracks: {tracks}</p>
            <p>Number Sold: {sales}</p>
            <p>Rating: {rating}</p>
            <BuyNow/>
            <Link className='text-blue-600 font-semibold' href={`/records`}>Back to Records Page</Link>
           </aside>
    )
  }

  export {SingleRecordCard}