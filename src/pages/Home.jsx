import { Box, Grid, Pagination } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import PokemonCard from '../components/PokemonCard'
import Skeletons from '../components/Skeletons'
import usePagination from '../components/AppPagination/pagination'

const Home = () => {
    const [pokemons, setPokemons] = useState([]); /* STATE TO SHOW POKEMONS */
    const [page, setPage] = useState(1); /* STATE TO DEFINE PAGINATION */

    const POKEMONS_AMOUNT = 180; /* POKEMONS AMOUNT TO BE SEARCHED ON API - CAN BE CHANGED TO ANY HIGHER VALUE TO SHOW MORE POKEMONS */
    const POKEMONS_PER_PAGE = 18; /* LIMIT OF POKEMONS SHOWN FOR EACH PAGE */
    const count = Math.ceil(pokemons.length / POKEMONS_PER_PAGE); /* CALCULATING THE TOTAL PAGES NEEDED BASED ON HOW MANY POKEMONS WILL BE SHOWN */

    const _DATA = usePagination(pokemons, POKEMONS_PER_PAGE) /* PASSING THE DATA AND POKEMONS PER PAGE TO FUNCTION AT PAGINATION.JS */
    const handlePageChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    useEffect(() => {
        getPokemons();
    }, []); /* USEEFFECT TO DISPLAY ALL POKEMONS */




    const getPokemons = () => {
        let endpoints = [];
        for (var i = 1; i < POKEMONS_AMOUNT; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }

        let response = axios.all(endpoints.map((endpoint) =>
            axios.get(endpoint)
        ))
            .then(res => setPokemons(res))
            .catch(err => console.log(err));

        return response;
    }; /* USING AXIOS TO GET THE API RESULT BASED ON POKEMONS_AMOUNT AND SETING THE STATE POKEMON */


    const pokemonFilter = (nameSearched) => {
        let filteredPokemons = [];
        nameSearched = nameSearched.toLowerCase();

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
            _DATA.jump(1);
        }
        setPokemons(filteredPokemons);
    } /* FUNCTION TO SEARCH PROPERLY WITH THE NAME AND/OR THE TYPE OF POKEMONS */



    return (
        <div style={{ backgroundColor: '#FFDE00', minHeight: '100vh' }}>
            <Navbar pokemonFilter={pokemonFilter} data-testid="navbar-home" />
            <Container maxWidth="false" >
                <Grid container spacing={3} >
                    {pokemons.length === 0 ?
                        <Skeletons />
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
                <Box display="flex" justifyContent="center" alignItems="center" sx={{ padding: "20px 0px" }}>
                    <Pagination count={count} page={page} onChange={handlePageChange} color='primary' />
                </Box>
            </Container>
        </div>
    )
}

export default Home
