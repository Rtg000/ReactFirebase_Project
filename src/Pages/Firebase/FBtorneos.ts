import { initializeApp } from "firebase/app"
import { firebaseConfig } from "./FirebaseConfig";
import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
// import { useFirestore } from "reactfire";
import { nanoid } from "nanoid";
import ITorneo from "./interfaces/iTorneo";

export const app = initializeApp(firebaseConfig);

export const addTorneo = async (data: ITorneo) => {
    try{
        // console.log("Insertando en FB el objeto: ",data)
        data.id=nanoid(20)
        const docRef = doc(getFirestore(),"Torneos",data.id)
        await setDoc(docRef,data)
    }catch(error){
        console.log(error)
    }
}

export const getTorneos = async ():Promise<ITorneo[]> => {
    let torneos: ITorneo[] = [];
    const torneosRef = collection(getFirestore(), "Torneos");
    const torneosDocs = await getDocs(torneosRef);
    torneosDocs.forEach( doc => {
        console.log(doc.data());
        const categoria = { ...doc.data() }
        // console.log(categoria);
        torneos.push(categoria as ITorneo)
    });
    console.log(torneos);
    return torneos
}