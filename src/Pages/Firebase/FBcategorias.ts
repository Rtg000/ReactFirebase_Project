import { initializeApp } from "firebase/app"
import { firebaseConfig } from "./FirebaseConfig";
import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
// import { useFirestore } from "reactfire";
import ICategoria from '../Firebase/interfaces/iCategoria';
import { nanoid } from "nanoid";

export const app = initializeApp(firebaseConfig);

export const addCategoria = async (data: ICategoria) => {
    try{
        // console.log("Insertando en FB el objeto: ",data)
        data.id=nanoid(20)
        const docRef = doc(getFirestore(),"Categorias",data.id)
        await setDoc(docRef,data)
    }catch(error){
        console.log(error)
    }
}

export const getCategorias = async ():Promise<ICategoria[]> => {
    let categorias: ICategoria[] = [];
    const categoriasRef = collection(getFirestore(), "Categorias");
    const categoriasDocs = await getDocs(categoriasRef);
    categoriasDocs.forEach( doc => {
        console.log(doc.data());
        const categoria = { ...doc.data() }
        // console.log(categoria);
        categorias.push(categoria as ICategoria)
    });
    console.log(categorias);
    return categorias
}