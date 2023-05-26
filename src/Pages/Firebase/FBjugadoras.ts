import { initializeApp } from "firebase/app"
import { firebaseConfig } from "./FirebaseConfig";
import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
// import { useFirestore } from "reactfire";
import { nanoid } from "nanoid";
import IJugadora from "./interfaces/iJugadora";
import jugadoras from "./data/jugadoras.json";

export const app = initializeApp(firebaseConfig);

export const addJugadora = async (data: IJugadora) => {
    try{
        const docRef = doc(getFirestore(),"Jugadoras",nanoid(20));
        await setDoc(docRef,data)
    }catch(error){
        console.log(error)
    }
}

export const cargarJugadoras = async () => {
    try{
        console.log("Carga Datos");
        jugadoras.map(async (jugador) => {
            await addJugadora(jugador);
            // console.log(torneo.name)
            // const docRef = doc(getFirestore(),"Torneos",nanoid(20));
        })
    }catch(error){
        console.log(error)
    }
}

export const getJugadoras = async ():Promise<IJugadora[]> => {
    let Jugadoras: IJugadora[] = [];
    const JugadorasRef = collection(getFirestore(), "Jugadoras");
    const JugadorasDocs = await getDocs(JugadorasRef);
    JugadorasDocs.forEach( doc => {
        console.log(doc.data());
        const categoria = { ...doc.data() }
        // console.log(categoria);
        Jugadoras.push(categoria as IJugadora)
    });
    console.log(Jugadoras);
    return Jugadoras
}