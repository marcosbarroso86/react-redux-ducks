import React from 'react'
import { useSelector} from 'react-redux'

export const Detalle = () => {

    const pokemon = useSelector(store => store.pokemones.pokemonDetail)

    return pokemon ? (

        <div className="card" style={{width: 300}}>
            <img src={pokemon.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <p className="card-text">Alto: {pokemon.weight} | Ancho: {pokemon.height}</p>
            </div>
        </div>

    ) : null
}
