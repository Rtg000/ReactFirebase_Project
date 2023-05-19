import { useEffect, useState } from "react";
import { addTorneo, cargarTorneos, getTorneos } from "../Firebase/FBtorneos";
import ITorneo from "../Firebase/interfaces/iTorneo";
import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";


export const Torneos = () => {
    const [torneos, setTorneos] = useState<ITorneo[]>([]);

    useEffect(() => {
        getTorneos()
        .then(res => {
            console.log(res)
            setTorneos(res)
        })
    },[])

    const onAddTorneo = async ( dataTorneo: ITorneo ) => {
        console.log('Enviando...')
        // console.log(dataTorneo)
        addTorneo(dataTorneo)
    }

    return(
        <>
            <h1>Test Torneos</h1>
            <Button variant="contained" onClick={cargarTorneos}>Cargar Datos</Button>
            <section>
            {
                torneos.map((torneo) => (
                    <article className="Tarjeta">
                        <p><b>Nombre:</b> {torneo.name}</p>
                        <p><b>Puntos:</b>  {torneo.puntos}</p>
                        <p><b>Superficie:</b> {torneo.superficie}</p>                        
                        <img src={torneo.logo}/>   
                    </article>
                ))
                }
            </section>
        </>
    )
}