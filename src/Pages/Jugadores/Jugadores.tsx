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
            <section>
                {
                jugadores.map((Jugador) => (
                    <article className="Tarjeta">
                        <p><b>Nombre: </b>{Jugador.name}</p>
                        <p><b>Edad: </b>{Jugador.edad}</p>
                        <p><b>Grand Slams ganados: </b>{Jugador.gs_ganados}</p>
                        <p><b>Ranking máximo: </b>{Jugador.ranking_maximo}</p>
                        <img src={Jugador.imagen}/>
                    </article>
                ))
                }
            </section>
            <Button variant="contained" onClick={cargarJugadores}>Cargar Datos</Button>
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
                                        type="text"
                                        sx={{width: '80%'}}
                                        InputLabelProps={{}}
                                        
                                    />
                                    <TextField
                                        // {...register('logo')} 
                                        label='logo'
                                        type='string'
                                        sx={{width: '80%'}}
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