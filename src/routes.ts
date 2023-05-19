// import { Main, Productos, Servicios, SobreNosotros } from './barril';
import { Main } from "./Pages/Main/Main";
import { Servicios } from "./Pages/Servicios/Servicios";
import { SobreNosotros } from "./Pages/SobreNosotros/SobreNosotros";
// import { Firebase } from "./Pages/Firebase/Firebase";
import { Jugadores } from "./Pages/Jugadores/Jugadores";
import { Home } from "./Pages/Home/Home";
import { Torneos } from "./Pages/Torneos/Torneos";
import Raqueta from './Img/RaquetaTennis.png';
import Trofeo from './Img/Trofeo.png';

type Componente = () => JSX.Element;

interface Route {
    path: string;
    component: Componente;
    name: string;
    children?: Route[]
}



export const Ruticas: Route[] = [
    {
        path: '/',
        component: Home,
        name: 'Inicio' 
    },
    {
        path: 'Servicios',
        component: Servicios,
        name: 'Servicios'
    },
    {
        path: 'SobreNosotros',
        component: SobreNosotros,
        name: 'SobreNosotros'
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
        imagen: Raqueta
    },
]