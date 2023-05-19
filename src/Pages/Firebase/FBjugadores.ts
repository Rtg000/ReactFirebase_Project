import { initializeApp } from "firebase/app"
import { firebaseConfig } from "./FirebaseConfig";
import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
// import { useFirestore } from "reactfire";
import { nanoid } from "nanoid";
import IJugador from "./interfaces/iJugador";
import jugadores from "./data/jugadores.json";

export const app = initializeApp(firebaseConfig);

export const addJugador = async (data: IJugador) => {
    try{
        // console.log("Insertando en FB el objeto: ",data)
        data.id=nanoid(20)
        const docRef = doc(getFirestore(),"Jugadores",data.id)
        await setDoc(docRef,data)
    }catch(error){
        console.log(error)
    }
}

export const cargarJugadores = async () => {
    try{
        console.log("Carga Datos");
        jugadores.map(async (jugador) => {
            await newJugador(jugador);
            // console.log(torneo.name)
            // const docRef = doc(getFirestore(),"Torneos",nanoid(20));
        })
    }catch(error){
        console.log(error)
    }
}

export const newJugador = async (data: IJugador) => {
    try{
        const docRef = doc(getFirestore(),"Jugadores",nanoid(20));
        await setDoc(docRef,data)
    }catch(error){

    }
}

export const getJugadores = async ():Promise<IJugador[]> => {
    let jugadores: IJugador[] = [];
    const jugadoresRef = collection(getFirestore(), "Jugadores");
    const jugadoresDocs = await getDocs(jugadoresRef);
    jugadoresDocs.forEach( doc => {
        console.log(doc.data());
        const categoria = { ...doc.data() }
        // console.log(categoria);
        jugadores.push(categoria as IJugador)
    });
    console.log(jugadores);
    return jugadores
}