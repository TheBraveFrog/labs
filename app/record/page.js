import Link from 'next/link'

import { PageHeader } from "../../components/header/PageHeader"
import {NavBar} from "../../components/navigation/NavBar"
import {SingleRecordCard} from "../../components/card/SingleRecordCard"
 

 async function RecordPage () {
 

  

   return(
    <>
    <NavBar/>
    <PageHeader title="Single Record Display" tagline=""/>
    <main className="py-6 flex flex-wrap justify-center">
      {
        values.map(item=> <SingleRecordCard key={item.id} {...item}/>)
      }
     </main>
     <Footer/>
    </>
   )
  
 }

export default RecordPage