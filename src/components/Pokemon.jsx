import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchPokemonsAction, nextPokemonsAction , previousPokemonsAction, fetchPokemonDetailAction } from '../redux/ducks/pokemonDuck';
import {  } from '../redux/ducks/pokemonDuck';
import { Detalle } from './Detalle';

export const Pokemon = () => {

    const dispatch = useDispatch()
    const pokemones = useSelector( store => store.pokemones.results);
    const next = useSelector( store => store.pokemones.next)
    const previous = useSelector( store => store.pokemones.next)
    
    return (
        <div className="container row p-2">
            <div className="col-md-6">
                <h5>Lista de pokemones</h5>
                <br/>
                <div className="d-flex justify-content-between mb-3">
                    {
                        pokemones.length === 0 &&
                        <button onClick={() => dispatch(fetchPokemonsAction())} className="btn btn-dark">Fetch pokemons!!</button>
                    }
                    {
                        next &&
                        <button onClick={() => dispatch(nextPokemonsAction())} className="btn btn-dark">Next pokemons!!</button>
                    }
                    {
                        previous &&
                        <button onClick={() => dispatch(previousPokemonsAction())} className="btn btn-dark">Previous pokemons!!</button>
                    }
                </div>
                <ul className="list-group">
                {
                    pokemones.map( (item , index) => (
                        <li key={index} className="list-group-item text-uppercase">
                            {item.name}
                            <button onClick={() => dispatch(fetchPokemonDetailAction(item.url))} className="btn btn-dark btn-sm float-right">Info</button>
                        </li>
                    ))
                }
                </ul>
            
            </div>
            <div className="col-md-6">
            <h3>Detalle</h3>
                <Detalle />
            </div>
        </div>
    )
}
