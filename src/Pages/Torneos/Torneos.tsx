import { useEffect, useState } from "react";
import { getTorneos } from "../Firebase/FBtorneos";
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
            <ul>
                {
                torneos.map((torneo) => (
                    <li>{torneo.name}</li>
                ))
                }
            </ul>
        </>
    )
}