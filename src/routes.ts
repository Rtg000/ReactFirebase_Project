// import { Main, Productos, Servicios, SobreNosotros } from './barril';
import { Main } from "./Pages/Main/Main";
import { Productos } from "./Pages/Productos/Productos";
import { Servicios } from "./Pages/Servicios/Servicios";
import { SobreNosotros } from "./Pages/SobreNosotros/SobreNosotros";
// import { Firebase } from "./Pages/Firebase/Firebase";
import { CategoriasPage } from "./Pages/Firebase/CategoriasPage";
import { Home } from "./Pages/Home/Home";

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
        path: 'Productos',
        component: Productos,
        name: 'Productos'
    },
    {
        path: 'SobreNosotros',
        component: SobreNosotros,
        name: 'SobreNosotros'
    },
    {
        path: 'Categorias',
        component: CategoriasPage,
        name: 'Categorias'
    }
]

export const MenuInicio: Route[] = [
    {
        path: 'SobreNosotros',
        component: SobreNosotros,
        name: 'Jugadores'
    },
    {
        path: 'Categorias',
        component: CategoriasPage,
        name: 'Torneos'
    },
]