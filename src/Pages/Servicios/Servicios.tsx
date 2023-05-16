import { useEffect, useState } from "react"


export const Servicios = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=999')
        .then( res => res.json())
        .then( res => res.results)
        // .then (res => console.log(res))
        .then( res => setPokemons(res))
    }, [])
    return(
        <>
            <h2>Test Pokemon</h2>
            <table>
            {
            pokemons.map(({name,url})=>(
                <tr>
                    <td>{name}</td>
                    <td>{url}</td>
                </tr>
            ))
            }
            </table>
        </>
    )
}



