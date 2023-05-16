import { NavLink } from "react-router-dom"
import { MenuInicio } from "../../routes"

export const Home = () => {
    return(
        <nav>
            {
            MenuInicio.map((route) => (
                <NavLink
                    to={route.path}>
                    <p>{route.name}</p>
                    <img src={route.imagen}/>
                </NavLink>
            ))
            }
        </nav>
    )
}