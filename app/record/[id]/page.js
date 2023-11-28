import Link from 'next/link'

import { PageHeader } from "../../../components/header/PageHeader"
import {NavBar} from "../../../components/navigation/NavBar"
import {SingleRecordCard} from "../../../components/card/SingleRecordCard"
import { getRecords } from "@/lib/firebase/getRecords"

async function getRecords(uid) {
  const payload = await getRecords()
  const records = Object.values(payload)
  const singleRecord = records.find(item => item.id == uid)
  return singleRecord
}
 

 async function RecordPage ({params}) {
  const uid = params.uid
  const recordData = await getRecords(id)
 
 
   return(
    <>
    <NavBar/>
    <PageHeader title="Single Record Display" tagline=""/>
    <main className="py-6 flex flex-wrap justify-center">
     <SingleRecordCard/>
    </main>
     <Footer/>
    </>
   )
}

export default RecordPage