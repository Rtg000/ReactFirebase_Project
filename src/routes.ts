// import { Main, Productos, Servicios, SobreNosotros } from './barril';
import { Main } from "./Pages/Main/Main";
import { Servicios } from "./Pages/Servicios/Servicios";
import { SobreNosotros } from "./Pages/SobreNosotros/SobreNosotros";
// import { Firebase } from "./Pages/Firebase/Firebase";
import { Jugadores } from "./Pages/Jugadores/Jugadores";
import { Home } from "./Pages/Home/Home";
import { Torneos } from "./Pages/Torneos/Torneos";
import ImgJugadores from './Img/TheBig3.png';
import ImgJugadoras from './Img/3WTA.png';
import Trofeo from './Img/Trofeo.png';
import { Jugadoras } from "./Pages/Jugadoras/Jugadoras";
import { Login } from "./Pages/Header/Login/Login";
// import { ListadoBruto } from "./Pages/ListadoBruto/ListadoBruto";

type Componente = () => JSX.Element;

interface Route {
    path: string;
    component: Componente;
    name: string;
    children?: Route[]
}



export const Ruticas: Route[] = [
    // {
    //     path: '/',
    //     component: Home,
    //     name: 'Inicio' 
    // },
    {
        path: 'SobreNosotros',
        component: SobreNosotros,
        name: 'Sobre Nosotros'
    },
    {
        path: 'Torneos',
        component: Torneos,
        name: 'Torneos'
    },
    {
        path: 'Jugadores',
        component: Jugadores,
        name: 'Jugadores'
    },
    {
        path: 'Jugadoras',
        component: Jugadoras,
        name: 'Jugadoras'
    },
    {
        path: 'Login',
        component: Login,
        name: 'Login'
    }
]

export const MenuInicio = [
    {
        path: 'Torneos',
        component: Torneos,
        name: 'Torneos',
        imagen: Trofeo
    },
    {
        path: 'Jugadores',
        component: Jugadores,
        name: 'Jugadores',
        imagen: ImgJugadores
    },
    {
        path: 'Jugadoras',
        component: Jugadoras,
        name: 'Jugadoras',
        imagen: ImgJugadoras
    }
]