import Link from 'next/link'

import { PageHeader } from "../../../components/header/PageHeader"
import {NavBar} from "../../../components/navigation/NavBar"
import {SingleRecordCard} from "../../../components/card/SingleRecordCard"
import { getRecord } from "@/lib/firebase/getRecord"

async function getRecord(id) {
  const payload = await getRecord()
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
    <PageHeader title="Single Record Display" tagline=""/>
    <main className="py-6 flex flex-wrap justify-center">
     <SingleRecordCard/>
    </main>
     <Footer/>
    </>
   )
}

export default RecordPage