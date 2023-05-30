import { useEffect, useState } from "react";
import { addJugadora, cargarJugadoras, getJugadoras } from "../Firebase/FBjugadoras"
import IJugadora from "../Firebase/interfaces/iJugadora";
import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";


export const Jugadoras = () => {
    const [jugadoras, setJugadoras] = useState<IJugadora[]>([]);

    useEffect(() => {
        getJugadoras()
        .then(res => {
            console.log(res)
            setJugadoras(res)
        })
    },[])

    const { register, handleSubmit } = useForm<IJugadora>();
    
    const onAddJugadora = async ( data: IJugadora ) => {
        console.log('Enviando...')
        await addJugadora(data)
        window.location.reload();
    }

    return(
        <>
            <Button variant="contained" onClick={cargarJugadoras}>Cargar datos</Button>
            <section>
                {
                jugadoras.sort((a,b) => (a.name > b.name)?1:((b.name > a.name)?-1:0)).map((Jugadora) => (
                    <article className="Tarjeta">
                        <div className="TarjetaInfo">
                            <p><b>Nombre: </b>{Jugadora.name}</p>
                            <p><b>Edad: </b>{Jugadora.edad}</p>
                            <p><b>Grand Slams ganados: </b>{Jugadora.gs_ganados}</p>
                            <p><b>Pais de origen: </b>{Jugadora.nacionalidad}</p>
                        </div>
                        <div className="TarjetaImg">
                            <img className="ImgJugadoras" src={Jugadora.imagen}/>
                        </div>
                    </article>
                ))
                }
            </section>
            <form className="FormAñadirDocumento" onSubmit={handleSubmit(onAddJugadora)} noValidate>
                <h1>Añadir Jugadoras</h1>
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
                    {...register('edad')} 
                    label='Edad'
                    type='number'
                    sx={{width: '100%'}}
                    InputLabelProps={{}}                 
                />
                <TextField
                    {...register('nacionalidad')} 
                    label='Pais de origen'
                    type='string'
                    sx={{width: '100%'}}
                    InputLabelProps={{}}                 
                />
                <TextField
                    {...register('gs_ganados')} 
                    label='Grand Slams ganados'
                    type='number'
                    sx={{width: '100%'}}
                    InputLabelProps={{}}                 
                />
                <TextField
                    {...register('imagen')} 
                    label='Imagen (URL)'
                    type='string'
                    sx={{width: '100%'}}
                    InputLabelProps={{}}                 
                />
                <Button type='submit' color='primary' className="circular-btn" variant='contained' style={{width: "80%"}}>Add Jugadora</Button>
            </form>
        </>
    )
}