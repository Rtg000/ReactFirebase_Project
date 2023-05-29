import './NavBar.css'
import { Ruticas } from "../../../routes"
import { NavLink } from 'react-router-dom'
import Logo from '../../../Img/TheTennisEnthusiast.png';
import { Home } from '../../Home/Home';

export const NavBar = () => {
    return(
            <nav>
                    <NavLink
                        to="/">
                        <img src={Logo}/>
                    </NavLink>                {
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
