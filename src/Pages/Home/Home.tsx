import { NavLink } from "react-router-dom"
import { MenuInicio } from "../../routes"

export const Home = () => {
    return(
        <nav>
            {
            MenuInicio.map((route) => (
                <NavLink
                    to={route.path}>
                    {route.name}
                </NavLink>
            ))
            }
        </nav>
    )
}