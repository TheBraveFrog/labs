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
     <SingleRecordCard {...recordData}/>
    </main>
     <Footer/>
    </>
   )
}

export default RecordPage