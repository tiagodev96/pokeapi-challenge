import { Box, Grid, Pagination } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import PokemonCard from '../components/PokemonCard'
import usePagination from '../components/AppPagination/pagination'
import { useSelector } from 'react-redux'

const Favorites = () => {
    const [pokemons, setPokemons] = useState([]); /* STATE TO SHOW POKEMONS */
    const [page, setPage] = useState(1); /* STATE TO DEFINE PAGINATION */

    const favoritePokemons = useSelector((state) => { return state }) /* ACCESS TO FAVORITE POKEMONS REDUCER */

    const POKEMONS_PER_PAGE = 18; /* LIMIT OF POKEMONS SHOWN FOR EACH PAGE */
    const count = Math.ceil(pokemons.length / POKEMONS_PER_PAGE); /* CALCULATING THE TOTAL PAGES NEEDED BASED ON HOW MANY POKEMONS WILL BE SHOWN */

    const _DATA = usePagination(pokemons, POKEMONS_PER_PAGE) /* PASSING THE DATA AND POKEMONS PER PAGE TO FUNCTION AT PAGINATION.JS */

    const handlePageChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    useEffect(() => {
        getPokemons();
    }, [favoritePokemons]); /* USEEFFECT TO DISPLAY POKEMONS EVERYTIME FAVORITE IS UPDATED, SO THE SCREEN WILL BE RELOADED IF POKEMON IS ADDED OR REMOVED */

    const getPokemons = () => {
        let endpoints = [];
        for (let pokemon of favoritePokemons) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        }

        let response = axios.all(endpoints.map((endpoint) =>
            axios.get(endpoint)
        ))
            .then(res => setPokemons(res))
            .catch(err => console.log(err));

        return response;
    }; /* USING AXIOS TO GET THE API RESULT BASED ON EACH FAVORITEPOKEMONS ITEM AND SETING THE STATE POKEMON */

    const pokemonFilter = (nameSearched) => {
        let filteredPokemons = [];
        nameSearched = nameSearched.toLowerCase();

        _DATA.jump(1);

        if (nameSearched === '') {
            getPokemons();
        }
        for (let i in pokemons) {
            if (pokemons[i].data.name.includes(nameSearched) && !filteredPokemons.includes(pokemons[i])) {
                filteredPokemons.push(pokemons[i])
            }
            if (pokemons[i].data.types[0].type.name.includes(nameSearched) && !filteredPokemons.includes(pokemons[i])) {
                filteredPokemons.push(pokemons[i])
            }
            if (pokemons[i].data.types[1] && pokemons[i].data.types[1].type.name.includes(nameSearched) && !filteredPokemons.includes(pokemons[i])) {
                filteredPokemons.push(pokemons[i])
            }
        }
        setPokemons(filteredPokemons);
    } /* FUNCTION TO SEARCH PROPERLY WITH THE NAME AND/OR THE TYPE OF POKEMONS */



    return (
        <div style={{ backgroundColor: '#FFDE00', minHeight: '100vh' }}>
            <Navbar pokemonFilter={pokemonFilter} isHome />
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    {pokemons.length === 0 || favoritePokemons.length === 0 ?
                        <Box display="flex" justifyContent="center" width="100%" marginTop="20px">
                            <h2>No Favorite Pokemons Yet :(</h2>
                        </Box>
                        :
                        _DATA.currentData().map((pokemon, key) => (
                            (
                                <Grid item xs={12} sm={6} md={4} xl={2} key={key}>
                                    <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} id={pokemon.data.id} />
                                </Grid>
                            )
                        ))
                    }
                </Grid>
                <Box display="flex" justifyContent="center" alignItems="center" sx={{ margin: "20px 0px" }}>
                    <Pagination count={count} page={page} onChange={handlePageChange} color='primary' />
                </Box>
            </Container>
        </div>
    )
}

export default Favorites
