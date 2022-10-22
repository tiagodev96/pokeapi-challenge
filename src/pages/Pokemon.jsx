import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Skeletons from '../components/Skeletons'
import SinglePokemon from '../components/SinglePokemon'
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState(''); /* STATE TO DEFINE POKEMONS TO BE SHOWN */
    const [nextPokemon, setNextPokemon] = useState(''); /* STATE TO DEFINE THE NEXT BUTTON WITH NAME AND ID OF THE POKEMON */
    const [previousPokemon, setPreviousPokemon] = useState(''); /* STATE TO DEFINE THE PREVIOUS BUTTON WITH NAME AND ID OF THE POKEMON */

    const params = useParams(); /* USING TO GET THE :ID ON THIS ROUTE */

    let nextPokemonId = Number(params.id) + 1
    let previousPokemonId = Number(params.id) - 1

    useEffect(() => {
        getPokemon()
        getNextPokemon()
        getPreviousPokemon()
    }, [pokemon]) /* UPDATING SCREEN EVERYTIME A POKEMON IS SET */

    const getPokemon = () => {
        let response = axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
            .then(res => setPokemon(res))
            .catch(err => console.log(err))
        return response
    }/* GET POKEMON BASED ON ID PARAM */

    const getNextPokemon = () => {
        let response = axios.get(`https://pokeapi.co/api/v2/pokemon/${nextPokemonId}`)
            .then(res => setNextPokemon(res))
            .catch(err => console.log(err))
        return response
    } /* SETTING NEXT BUTTON WITH THE PARAMS ID + 1 */

    const getPreviousPokemon = () => {
        let response;

        if (previousPokemonId <= 0) { /* NECESSARY TO FIX PAGINATION PROBLEM IF ITS THE POKEMON WITH ID = 1 SCREEN */
            response = axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
                .then(res => setPreviousPokemon(res))
                .catch(err => console.log(err))
        } else {
            response = axios.get(`https://pokeapi.co/api/v2/pokemon/${previousPokemonId}`)
                .then(res => setPreviousPokemon(res))
                .catch(err => console.log(err))
        }
        return response
    } /* SETTING PREVIOUS BUTTON WITH THE PARAMS ID - 1 */

    const handlePreviousPage = () => {
        let response = axios.get(`https://pokeapi.co/api/v2/pokemon/${previousPokemonId}`)
            .then(res => setPokemon(res))
            .catch(err => console.log(err))
        return response
    } /* SET POKEMON AFTER PREVIOUS PAGE IS CLICKED */

    const handleNextPage = () => {
        let response = axios.get(`https://pokeapi.co/api/v2/pokemon/${nextPokemonId}`)
            .then(res => setPokemon(res))
            .catch(err => console.log(err))
        return response
    } /* SET POKEMON AFTER NEXT PAGE IS CLICKED */

    return (
        <>
            {pokemon.length === 0 ?
                <Skeletons /> :
                <SinglePokemon name={pokemon.data.name} ID={pokemon.data.id} frontImage={pokemon.data.sprites.front_default} backImage={pokemon.data.sprites.back_default} types={pokemon.data.types} abilities={pokemon.data.abilities} height={pokemon.data.height} weight={pokemon.data.weight} />}
            {nextPokemon.length === 0 || previousPokemon.length === 0 ?
                <Skeletons /> :
                <Box display="flex" gap="20px" justifyContent="center" padding="5px 0px 20px">
                    <Link to={`/pokemon/${previousPokemon.data.id}`} onClick={() => handlePreviousPage()}>
                        <Button variant="contained"><ArrowLeftIcon />#{previousPokemon.data.id} {previousPokemon.data.name}</Button>
                    </Link>
                    <Link to={`/pokemon/${nextPokemon.data.id}`} onClick={() => handleNextPage()}>
                        <Button variant="contained">#{nextPokemon.data.id} {nextPokemon.data.name}<ArrowRightIcon /></Button>
                    </Link>
                </Box>
            }

        </>
    )
}

export default Pokemon
