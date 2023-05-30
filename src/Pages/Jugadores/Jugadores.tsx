import { useEffect, useState } from "react";
import { addJugador, cargarJugadores, getJugadores } from "../Firebase/FBjugadores"
import IJugador from "../Firebase/interfaces/iJugador";
import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";


export const Jugadores = () => {
    const [jugadores, setJugadores] = useState<IJugador[]>([]);

    useEffect(() => {
        getJugadores()
        .then(res => {
            console.log(res)
            setJugadores(res)
        })
    },[])

    return(
        <>
            <Button variant="contained" onClick={cargarJugadores}>Cargar datos</Button>
            {/* <button className="BotonCargarDatos" onClick={cargarJugadores}>CARGAR DATOS</button> */}
            <section>
                {
                jugadores.sort((a,b) => (a.name > b.name)?1:((b.name > a.name)?-1:0)).map((Jugador) => (
                    <article className="Tarjeta">
                        <div className="TarjetaInfo">
                            <p><b>Nombre: </b>{Jugador.name}</p>
                            <p><b>Edad: </b>{Jugador.edad}</p>
                            <p><b>Grand Slams ganados: </b>{Jugador.gs_ganados}</p>
                            <p><b>Pais de origen: </b>{Jugador.nacionalidad}</p>
                        </div>
                        <div className="TarjetaImg">
                            <img className="ImgJugadores" src={Jugador.imagen}/>
                        </div>
                    </article>
                ))
                }
            </section>    
        </>
    )
}