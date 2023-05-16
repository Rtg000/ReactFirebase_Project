import './NavBar.css'
import { Ruticas } from "../../../routes"
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return(
            <nav>
                {
                    Ruticas.map((route) => (
                        <NavLink
                            to={route.path}>
                            {route.name}
                        </NavLink>
                    ))
                }
            </nav>
        )
    
}
