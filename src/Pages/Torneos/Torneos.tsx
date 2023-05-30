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

    const { register, handleSubmit } = useForm<ITorneo>();
    
    const onAddTorneo = async ( data: ITorneo ) => {
        console.log('Enviando...')
        await addTorneo(data)
        window.location.reload();
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
            <form className="FormAñadirDocumento" onSubmit={handleSubmit(onAddTorneo)} noValidate>
                <h1>Añadir Torneos</h1>
                <TextField
                    {...register('id')}
                    id='id'
                    label='id'
                    type="string"
                    sx={{width: '100%'}}
                    InputLabelProps={{}} 
                />
                <TextField
                    {...register('name')}
                    id='nombre'
                    label='Nombre'
                    type="string"
                    sx={{width: '100%'}}
                    InputLabelProps={{}}                 
                />
                <TextField
                    {...register('puntos')} 
                    label='Puntos'
                    type='number'
                    sx={{width: '100%'}}
                    InputLabelProps={{}}                 
                />
                <TextField
                    {...register('superficie')} 
                    label='Superficie'
                    type='string'
                    sx={{width: '100%'}}
                    InputLabelProps={{}}                 
                />
                <TextField
                    {...register('logo')} 
                    label='Logo (URL)'
                    type='string'
                    sx={{width: '100%'}}
                    InputLabelProps={{}}                 
                />
                <Button type='submit' color='primary' className="circular-btn" variant='contained' style={{width: "80%"}}>Add Torneo</Button>
            </form>
        </>
    )
}