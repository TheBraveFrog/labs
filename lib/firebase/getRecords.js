import {db} from './firebase-config'
export async function getRecords () {
    const dbRef =  db.ref('/records')
    const dataSnapshot = await dbRef.once('value')
     return  dataSnapshot.val()
}