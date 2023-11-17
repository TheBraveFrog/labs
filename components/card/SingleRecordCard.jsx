import Link from 'next/link'


function SingleRecordCard ({artist, description, label, producer, rating, release_date, sales, title, tracks }){
    return (
           <aside>
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