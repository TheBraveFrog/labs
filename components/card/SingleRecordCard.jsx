import Link from 'next/link'


function SingleRecordCard ({artist, description, label, producer, rating, release_date, sales, title, tracks }){
    return (
           <aside  class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex">
           <h2>{title}</h2>
            <p>{artist}</p>
            <p>{producer}</p>
            <p>{label}</p>
            <p>{release_date}</p>
            <p>{description}</p>
            <p>{tracks}</p>
            <p>{sales}</p>
            <p>{rating}</p>
            <Link className='text-blue-600 font-semibold' href={`/records`}>Back to Records Page</Link>
           </aside>
    )
  }

  export {SingleRecordCard}