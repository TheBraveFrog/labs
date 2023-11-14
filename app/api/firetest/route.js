import {db} from '@/lib/firebase/firebase-config'
async function GET (req, {params}) {
    const dbRef =  db.ref('/records')
    const dataSnapshot = await dbRef.once('value')
    const records = await dataSnapshot.val()
    
    return Response.json(records)
}
 
export {GET}