import { getFirestore } from "firebase/firestore"
import { Outlet } from "react-router-dom"
import { FirestoreProvider, useFirebaseApp } from "reactfire"
import './Main.css'

export const Main = () => {
    const firestoreInstance = getFirestore(useFirebaseApp());
    return(
        <FirestoreProvider sdk={firestoreInstance}>
            <main>
                <Outlet/>
            </main>
        </FirestoreProvider>
    )
}
