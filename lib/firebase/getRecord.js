import {db} from './firebase-config'
export async function getRecord () {
    const dbRef =  db.ref('/record')
    const dataSnapshot = await dbRef.once('value')
     return  dataSnapshot.val()
}