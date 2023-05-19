interface IJugador {
    id: string;
    name: string;
    edad: number;
    ranking_maximo: number;
    gs_ganados: number;
    imagen?: string;
}

export default IJugador;