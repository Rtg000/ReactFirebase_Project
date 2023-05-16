import { useEffect, useState } from "react";
import { addCategoria, getCategorias } from "./FBcategorias"
import ICategoria from "./interfaces/iCategoria";
import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export const CategoriasPage = () => {
    const [categorias, setCategorias] = useState<ICategoria[]>([]);

    useEffect(() => {
        getCategorias()
        .then(res => {
            console.log(res)
            setCategorias(res)
        })
    },[])

    const { register, handleSubmit } = useForm<ICategoria>();
    
    const onAddCategoria = async ( dataCategoria: ICategoria ) => {
        console.log('Enviando...')
        // console.log(dataCategoria)
        addCategoria(dataCategoria)
    }

    return(
        <>
            <Grid container sx={{padding: '10px', width: '100%', display: 'flex'}}>
                <Grid item xs={5.8} md={7} sx={{border: '0px solid red'}}>
                    <Card sx={{bgcolor: '#fef'}}>
                        <CardHeader title='Listado de Categorias' sx={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}/>
                        <CardContent>
                            <ul>
                                {
                                categorias.map((categoria) => (
                                    <li>{categoria.name}</li>
                                ))
                                }
                            </ul>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={.4} md={1}/>
                <Grid item xs={5.8} md={4}>
                    <Card sx={{bgcolor: '#fef'}}>
                        <form onSubmit={handleSubmit(onAddCategoria)} noValidate>
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
                                <Button type='submit' color='primary' className="circular-btn" variant='contained'>Add categoria</Button>
                            </CardActions>
                        </form>
                    </Card>
                </Grid>
            </Grid>            
        </>
    )
}