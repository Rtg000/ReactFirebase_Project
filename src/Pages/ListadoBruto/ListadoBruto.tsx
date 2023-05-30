import { table } from "console"
import { useEffect, useState } from "react";
import IJugador from "../Firebase/interfaces/iJugador";
import { addJugador, borrarJugador, cargarJugadores, getJugadores } from "../Firebase/FBjugadores";
import './ListadoBruto.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faPen, faPenSquare, faTimesSquare } from "@fortawesome/free-solid-svg-icons";
import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";


export const ListadoBruto = () => {

    const { register, handleSubmit } = useForm<IJugador>();
    
    const onAddJugador = async ( data: IJugador ) => {
        console.log('Enviando...')
        await addJugador(data)
        window.location.reload();
    }

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
            <Button id="BotonCargaJugadores" variant="contained" onClick={cargarJugadores}>Cargar datos</Button>
            <table>
                <tr>
                    <td className="td_PrimeraColumna"><b>ID</b></td>
                    <td className="td_SegundaColumna"><b>Nombre</b></td>
                    <td className="td_TerceraColumna"><b>Edad</b></td>
                    <td className="td_CuartaColumna"><b>Grand Slams</b></td>
                    <td className="td_QuintaColumna"><b>Pais de origen</b></td>
                    <td className="td_SextaColumna"><b>Imagen (URL)</b></td>
                    <td className="td_SeptimaColumna"><b></b></td>
                    <td className="td_OctavaColumna"><b></b></td>
                </tr>
                {
                jugadores.sort((a,b) => (a.name > b.name)?1:((b.name > a.name)?-1:0)).map((Jugador) => (
                    <tr className="FilaCrud">
                        <td className="td_PrimeraColumna">{Jugador.id}</td>
                        <td className="td_SegundaColumna">{Jugador.name}</td>
                        <td className="td_TerceraColumna">{Jugador.edad}</td>
                        <td className="td_CuartaColumna">{Jugador.gs_ganados}</td>
                        <td className="td_QuintaColumna">{Jugador.nacionalidad}</td>
                        <td className="td_SextaColumna"><img src={Jugador.imagen}/></td> 
                        <td className="td_SeptimaColumna"><FontAwesomeIcon icon={faPenSquare} size="2x" style={{color: "#0d6dff"}}/></td>
                        <td className="td_OctavaColumna"><FontAwesomeIcon onClick={() => borrarJugador(Jugador.id)} icon={faTimesSquare} size="2x" style={{color: "#0d6dff"}}/></td>
                    </tr>
                ))
                }
            </table>
            <form className="FormAñadirDocumento" onSubmit={handleSubmit(onAddJugador)} noValidate>
                <h1>Añadir Jugadores</h1>
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
                    <Button type='submit' color='primary' className="circular-btn" variant='contained' style={{width: "80%"}}>Add Jugador</Button>
                </form>
        </>    
    )
}