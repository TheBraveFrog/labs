import Link from 'next/link'

import {PageHeader } from "../../components/header/PageHeader"
import {NavBar} from "../../components/navigation/NavBar"
import {Footer} from "../../components/footer/Footer"
import {Card} from "../../components/card/Card" 
import { getRecords } from "@/lib/firebase/getRecords"

 async function RecordsPage () {
  const records = await getRecords();
  const keys = Object.keys(records)
  const values = Object.values(records)
  const entries = Object.entries(records)
  const temp = true;

   return(
    <>
    <NavBar/>
    <PageHeader title="All Records Display" tagline="View all our records"/>
    <main className="py-6 flex flex-wrap justify-center">
      {
        values.map(item=> <Card key={item.id} {...item}/>)
      }
     </main>
     <Footer/>
    </>
   )
  
  
}


export default RecordsPage