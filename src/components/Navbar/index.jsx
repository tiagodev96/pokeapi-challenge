import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
/* DEFAULT PATTERN OF MATERIAL UI NAVBAR */

export default function Navbar(props) {
    const handleSearch = (e) => {
        props.pokemonFilter(e.target.value)
        console.log(e.target.value)
    } /* EXECUTION OF INHERITED FUNCTION TO SEARCH FOR POKEMONS AND TYPES OF POKEMONS */


    return (
        <Box sx={{ marginBottom: "1.5em" }}>
            <AppBar position="static" sx={{ backgroundColor: '#ff1f1f' }}>
                <Toolbar>
                    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" flexWrap="wrap" padding="20px 2%" gap="15px">
                        <Link to="/" >
                            <Box component="img" src="/assets/images/logo-pokemon.webp" height="6em" data-testid="pokemon-logo" />
                        </Link>
                        <Link to="/favorites">
                            <Box display="flex" alignItems="center" gap="10px">
                                <FavoriteOutlinedIcon sx={{ color: "#fff" }} />
                                <p style={{ color: '#fff', fontWeight: 'bold', fontSize: '20px' }}>My Favorites</p>
                            </Box>
                        </Link>
                        <Search onChange={handleSearch}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                data-testid="search-input"
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                </Toolbar >
            </AppBar >
        </Box >
    );
}
