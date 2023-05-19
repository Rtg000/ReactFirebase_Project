import { useEffect, useState } from "react";
import { cargar, getTorneos } from "../Firebase/FBtorneos";
import ITorneo from "../Firebase/interfaces/iTorneo";
import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { addCategoria } from "../Firebase/FBcategorias";

export const Torneos = () => {
    const [torneos, setTorneos] = useState<ITorneo[]>([]);

    useEffect(() => {
        getTorneos()
        .then(res => {
            console.log(res)
            setTorneos(res)
        })
    },[])

    const onAddCategoria = async ( dataCategoria: ITorneo ) => {
        console.log('Enviando...')
        // console.log(dataCategoria)
        addCategoria(dataCategoria)
    }

    return(
        <>
            <h1>Test Torneos</h1>
            <Button variant="contained" onClick={cargar}>Cargar Datos</Button>
            <section>
            {
                torneos.map((torneo) => (
                    <article className="Tarjeta">
                        <p>Nombre: {torneo.name}</p>
                        <p>Puntos: {torneo.puntos}</p>
                        <p>Superficie: {torneo.superficie}</p>                        
                        <img src={torneo.logo}/>   
                    </article>
                ))
                }
            </section>
        </>
    )
}