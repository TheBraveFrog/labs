import Link from 'next/link'

import { PageHeader } from "../../../components/header/PageHeader"
import { Footer } from "../../../components/footer/Footer"
import {NavBar} from "../../../components/navigation/NavBar"
import {SingleRecordCard} from "../../../components/card/SingleRecordCard"
import {getRecords} from "@/lib/firebase/getRecords"

async function getRecord(id) {
  const payload = await getRecords(id)
  const records = Object.values(payload)
  const singleRecord = records.find(item => item.id == id)
  return singleRecord
}
 

 async function RecordPage ({params}) {
  const id = params.id
  const recordData = await getRecord(id)
 
 
   return(
    <>
    <NavBar/>
    <PageHeader title="Single Record Display" tagline="Check out more info"/>
    <main className="py-6 flex flex-wrap justify-center">
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
    </main>
     <Footer/>
    </>
   )
}

export default RecordPage