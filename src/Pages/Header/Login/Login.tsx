import { Button, List, TextField } from "@mui/material"
import { ListadoB, Ruticas } from "../../../routes"
import path from "path"
import { ListadoBruto } from "../../ListadoBruto/ListadoBruto"
import { NavLink, useNavigate } from "react-router-dom";

export const Login = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = ``
        navigate(path);
    }

    return(
        <form className="FormLogin" action="">
            <TextField
                // {...register('name')}
                id='usuario'
                label='Usuario'
                type="string"
                sx={{width: '100%'}}
                InputLabelProps={{}}                        
            />
            <TextField
                // {...register('name')}
                id='contraseña'
                label='Contraseña'
                type="string"
                sx={{width: '100%'}}
                InputLabelProps={{}}                        
            />      
            <Button id="ButtonLogin" variant="contained" onClick={routeChange}>Iniciar Sesión</Button>
            {/* <NavLink
                to={ListadoB}>
                {ListadoB.component}

            </NavLink> */}
        </form> 
    )
}