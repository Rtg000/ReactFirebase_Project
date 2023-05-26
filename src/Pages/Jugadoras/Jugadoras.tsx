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
    
    const onAddJugadora = async ( dataJugador: IJugadora ) => {
        console.log('Enviando...')
        // console.log(dataJugador)
        addJugadora(dataJugador)
    }

    return(
        <>
            <Button variant="contained" onClick={cargarJugadoras}>Cargar datos</Button>
            {/* <button className="BotonCargarDatos" onClick={cargarJugadoras}>CARGAR DATOS</button> */}
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
            <Grid container sx={{padding: '10px', width: '100%', display: 'flex'}}>
                <Grid item xs={5.8} md={4}>
                    <Card sx={{bgcolor: '#fef'}}>
                        <form onSubmit={handleSubmit(onAddJugadora)} noValidate>
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