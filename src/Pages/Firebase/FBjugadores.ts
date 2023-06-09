import { initializeApp } from "firebase/app"
import { firebaseConfig } from "./FirebaseConfig";
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
// import { useFirestore } from "reactfire";
import { nanoid } from "nanoid";
import IJugador from "./interfaces/iJugador";
import jugadores from "./data/jugadores.json";

export const app = initializeApp(firebaseConfig);

export const addJugador = async (data: IJugador) => {
    try{
        const docRef = doc(getFirestore(),"Jugadores",data.id);
        await setDoc(docRef,data)
    }catch(error){
        console.log(error)
    }
}

export const cargarJugadores = async () => {
    try{
        console.log("Carga Datos");
        jugadores.map(async (jugador) => {
            await addJugador(jugador);
            // console.log(torneo.name)
            // const docRef = doc(getFirestore(),"Torneos",nanoid(20));
        })
    }catch(error){
        console.log(error)
    }
}

export const getJugadores = async ():Promise<IJugador[]> => {
    let jugadores: IJugador[] = [];
    const jugadoresRef = collection(getFirestore(), "Jugadores");
    const jugadoresDocs = await getDocs(jugadoresRef);
    jugadoresDocs.forEach( doc => {
        console.log(doc.data());
        const categoria = { ...doc.data() }
        jugadores.push(categoria as IJugador)
    });
    console.log(jugadores);
    return jugadores
}

export const borrarJugador = async (id: string) => {
    try{
        console.log("TestBorrado")
        const docRef = doc(getFirestore(),"Jugadores",id);
        await deleteDoc(docRef);
        window.location.reload();
    }catch(error){
        console.log(error)
    }
}