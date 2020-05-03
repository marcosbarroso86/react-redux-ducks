import axios from 'axios';

const initialState = {
    results : [] ,
    count : 0,
    next : null,
    previous : null,
    pokemonDetail : null
}

/* constants */
const FETCH_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
const PAGINATION_NEXT_POKEMONS = 'PAGINATION_NEXT_POKEMONS'
const FETCH_POKEMON_DETAIL_SUCCESS = 'FETCH_POKEMON_DETAIL_SUCCESS';


/* reducers */
export default function reducer (state = initialState , action){
    switch (action.type) {
        case FETCH_POKEMONS_SUCCESS:
            return {...state , ...action.payload}
        case PAGINATION_NEXT_POKEMONS:
            return {...state , ...action.payload}
        case FETCH_POKEMON_DETAIL_SUCCESS:
            return {...state , pokemonDetail : action.payload}
        default: return state;
    }
}

/* actions */
export const fetchPokemonsAction = () => async (dispatch , getState ) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'`)
        dispatch({
            type : FETCH_POKEMONS_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const nextPokemonsAction = () => async (dispatch , getState) => {
    
    const {next} = getState().pokemones
    try {
        const response = await axios.get(next)
        dispatch({
            type: PAGINATION_NEXT_POKEMONS,
            payload:  response.data  
        })
    } catch (error) {
        console.log(error);
    }
}

export const previousPokemonsAction = () => async (dispatch , getState) => {
    const {previous} = getState().pokemones
    try {
        const response = await axios.get(previous)
        dispatch({
            type: PAGINATION_NEXT_POKEMONS,
            payload:  response.data  
        })
    } catch (error) {
        console.log(error);
    }
}

export const fetchPokemonDetailAction = (url) => async (dispatch , getState) => {

    try {
        const response = await axios.get(url);
        dispatch({
            type: FETCH_POKEMON_DETAIL_SUCCESS,
            payload: {
               name : response.data.name,
               weight: response.data.weight,
               height: response.data.height,
               image: response.data.sprites.front_default
            }  
        })
    } catch (error) {
        console.log(error);
    }
}