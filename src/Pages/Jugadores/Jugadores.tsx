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

    const { register, handleSubmit } = useForm<IJugador>();
    
    const onAddJugador = async ( dataJugador: IJugador ) => {
        console.log('Enviando...')
        // console.log(dataJugador)
        addJugador(dataJugador)
    }

    return(
        <>
            <Button variant="contained" onClick={cargarJugadores}>Cargar Datos</Button>
            <section>
                {
                jugadores.map((Jugador) => (
                    <article className="Tarjeta">
                        <div className="TarjetaInfo">
                            <p><b>Nombre: </b>{Jugador.name}</p>
                            <p><b>Edad: </b>{Jugador.edad}</p>
                            <p><b>Grand Slams ganados: </b>{Jugador.gs_ganados}</p>
                            <p><b>Pais de origen: </b>{Jugador.nacionalidad}</p>
                        </div>
                        <div className="TarjetaImg">
                            <img src={Jugador.imagen}/>
                        </div>
                    </article>
                ))
                }
            </section>
            <Grid container sx={{padding: '10px', width: '100%', display: 'flex'}}>
                <Grid item xs={5.8} md={4}>
                    <Card sx={{bgcolor: '#fef'}}>
                        <form onSubmit={handleSubmit(onAddJugador)} noValidate>
                            <CardHeader title='Inserción de Categorías' sx={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}/>
                            <CardContent>
                                {/* <form> */}
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
                                    />
                                    <TextField
                                        {...register('nacionalidad')} 
                                        label='Pais de origen'
                                        type='string'
                                        sx={{width: '100%'}}
                                    />
                                    <TextField
                                        {...register('gs_ganados')} 
                                        label='Grand Slams ganados'
                                        type='number'
                                        sx={{width: '100%'}}
                                    />
                                    <TextField
                                        {...register('imagen')} 
                                        label='Imagen (URL)'
                                        type='string'
                                        sx={{width: '100%'}}
                                    />
                            </CardContent>
                            <CardActions>
                                <Button type='submit' color='primary' className="circular-btn" variant='contained'>Add Jugador</Button>
                            </CardActions>
                        </form>
                    </Card>
                </Grid>
            </Grid>            
        </>
    )
}