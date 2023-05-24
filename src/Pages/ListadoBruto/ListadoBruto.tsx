import { table } from "console"
import { useEffect, useState } from "react";
import IJugador from "../Firebase/interfaces/iJugador";
import { getJugadores } from "../Firebase/FBjugadores";
import './ListadoBruto.css'

export const ListadoBruto = () => {

    const [jugadores, setJugadores] = useState<IJugador[]>([]);

    useEffect(() => {
        getJugadores()
        .then(res => {
            console.log(res)
            setJugadores(res)
        })
    },[])

    return(
        <table>
            <tr>
                <td className="td_PrimeraColumna"><b>ID</b></td>
                <td className="td_SegundaColumna"><b>Nombre</b></td>
                <td className="td_TerceraColumna"><b>Edad</b></td>
                <td className="td_CuartaColumna"><b>Grand Slams</b></td>
                <td className="td_QuintaColumna"><b>Pais de origen</b></td>
                <td className="td_SextaColumna"><b>Imagen (URL)</b></td>
                <td className="td_SeptimaColumna"><b></b></td>
                <td className="td_OctavaColumna"><b></b></td>
            </tr>
            {
            jugadores.sort((a,b) => (a.name > b.name)?1:((b.name > a.name)?-1:0)).map((Jugador) => (
                <tr className="FilaCrud">
                    <td>{Jugador.id}</td>
                    <td>{Jugador.name}</td>
                    <td>{Jugador.edad}</td>
                    <td>{Jugador.gs_ganados}</td>
                    <td>{Jugador.nacionalidad}</td>
                    <td>{Jugador.imagen}</td> 
                </tr>
            ))
            }
        </table>
    )
}