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
            <Button variant="contained" onClick={cargarTorneos}>Cargar datos</Button>
            {/* <button className="BotonCargarDatos" onClick={cargarTorneos}>CARGAR DATOS</button> */}
            <section>
            {
                torneos.sort((a,b) => (a.name > b.name)?1:((b.name > a.name)?-1:0)).map((torneo) => (
                    <article className="Tarjeta">
                        <div className="TarjetaInfo">
                            <p><b>Nombre:</b> {torneo.name}</p>
                            <p><b>Puntos:</b>  {torneo.puntos}</p>
                            <p><b>Superficie:</b> {torneo.superficie}</p>   
                        </div>
                        <div className="TarjetaImg">
                            <img className="ImgTorneos" src={torneo.logo}/>   
                        </div>
                    </article>
                ))
                }
            </section>
        </>
    )
}