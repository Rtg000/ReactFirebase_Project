import { table } from "console"
import { useEffect, useState } from "react";
import IJugador from "../Firebase/interfaces/iJugador";
import { borrarJugador, getJugadores, id } from "../Firebase/FBjugadores";
import './ListadoBruto.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faPen, faPenSquare, faTimesSquare } from "@fortawesome/free-solid-svg-icons";


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
                    <td className="td_PrimeraColumna">{Jugador.id}</td>
                    <td className="td_SegundaColumna">{Jugador.name}</td>
                    <td className="td_TerceraColumna">{Jugador.edad}</td>
                    <td className="td_CuartaColumna">{Jugador.gs_ganados}</td>
                    <td className="td_QuintaColumna">{Jugador.nacionalidad}</td>
                    <td className="td_SextaColumna"><img src={Jugador.imagen}/></td> 
                    <td className="td_SeptimaColumna"><FontAwesomeIcon icon={faPenSquare} size="2x" style={{color: "#0d6dff"}}/></td>
                    {/* <td className="td_OctavaColumna"><button onClick={() => borrarJugador(Jugador.id)}><FontAwesomeIcon icon={faTimesSquare} size="2x" style={{color: "#0d6dff"}}/></button></td> */}
                    <td className="td_OctavaColumna"><FontAwesomeIcon onClick={() => borrarJugador(Jugador.id)} icon={faTimesSquare} size="2x" style={{color: "#0d6dff"}}/></td>
                </tr>
            ))
            }
        </table>
    )
}