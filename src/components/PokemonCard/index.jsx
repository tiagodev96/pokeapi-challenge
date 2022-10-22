import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './style.sass'
import { Box } from '@mui/system';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


export default function PokemonCard(props) {
    const favoritePokemons = useSelector((state) => { return state })
    const dispatch = useDispatch();
    /* ACCESS TO FAVORITE POKEMONS REDUCER */

    const typeHandler = () => {
        let typeOne;
        let typeTwo;

        switch (props.types[0].type.name) {
            case 'bug':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/bug-type-icon.svg" />
                break
            case 'dark':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/dark-type-icon.svg" />
                break
            case 'dragon':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/dragon-type-icon.svg" />
                break
            case 'electric':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/electric-type-icon.svg" />
                break
            case 'fairy':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/fairy-type-icon.svg" />
                break
            case 'fighting':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/fighting-type-icon.svg" />
                break
            case 'fire':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/fire-type-icon.svg" />
                break
            case 'flying':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/flying-type-icon.svg" />
                break
            case 'ghost':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/ghost-type-icon.svg" />
                break
            case 'grass':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/grass-type-icon.svg" />
                break
            case 'ground':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/ground-type-icon.svg" />
                break
            case 'ice':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/ice-type-icon.svg" />
                break
            case 'normal':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/normal-type-icon.svg" />
                break
            case 'poison':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/poison-type-icon.svg" />
                break
            case 'psychic':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/psychic-type-icon.svg" />
                break
            case 'rock':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/rock-type-icon.svg" />
                break
            case 'steel':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/steel-type-icon.svg" />
                break
            case 'water':
                typeOne = <Box component="img" height="25px" src="/assets/images/type-icons/water-type-icon.svg" />
                break
            default:
                typeOne = ''
        }

        if (props.types[1]) {
            switch (props.types[1].type.name) {
                case 'bug':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/bug-type-icon.svg" />
                    break
                case 'dark':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/dark-type-icon.svg" />
                    break
                case 'dragon':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/dragon-type-icon.svg" />
                    break
                case 'electric':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/electric-type-icon.svg" />
                    break
                case 'fairy':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/fairy-type-icon.svg" />
                    break
                case 'fighting':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/fighting-type-icon.svg" />
                    break
                case 'fire':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/fire-type-icon.svg" />
                    break
                case 'flying':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/flying-type-icon.svg" />
                    break
                case 'ghost':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/ghost-type-icon.svg" />
                    break
                case 'grass':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/grass-type-icon.svg" />
                    break
                case 'ground':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/ground-type-icon.svg" />
                    break
                case 'ice':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/ice-type-icon.svg" />
                    break
                case 'normal':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/normal-type-icon.svg" />
                    break
                case 'poison':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/poison-type-icon.svg" />
                    break
                case 'psychic':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/psychic-type-icon.svg" />
                    break
                case 'rock':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/rock-type-icon.svg" />
                    break
                case 'steel':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/steel-type-icon.svg" />
                    break
                case 'water':
                    typeTwo = <Box component="img" height="25px" src="/assets/images/type-icons/water-type-icon.svg" />
                    break
                default:
                    typeTwo = ''
            }
        }

        if (props.types[1]) {
            return (
                <div>
                    {typeOne} {typeTwo}
                </div>
            )
        }
        return typeOne;

    } /* SIMPLE CHECK IF POKEMON HAS TWO TYPES OR ONLY ONE TO DISPLAY AND ATTRIBUTION OF RESPECTIVE TYPE ICON*/

    return (
        <Card sx={{ boxShadow: '5px 5px 10px rgba(0,0,0, 0.30)' }} >
            <Link to={`/pokemon/${props.id}`} >
                <CardMedia
                    data-testid="pokemon-card"
                    component="img"
                    image={props.image}
                    alt={`${props.name}'s Image`}
                    sx={{ cursor: 'pointer' }}

                />
            </Link>
            <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                    <Link to={`/pokemon/${props.id}`} >
                        <Typography gutterBottom variant="h5" component="div" className="name" sx={{ cursor: 'pointer' }}>
                            {props.name}
                        </Typography>
                    </Link>
                    <Typography gutterBottom variant="caption" component="div">
                        {typeHandler()}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                {favoritePokemons.includes(props.id) ?
                    <Button size="small" className="button" onClick={() => { dispatch({ type: 'UNFAVORITE', payload: props.id }) }}>
                        <FavoriteOutlinedIcon sx={{ color: 'red' }} />
                    </Button> :
                    <Button size="small" className="button" onClick={() => { dispatch({ type: 'FAVORITE', payload: props.id }) }}>
                        <FavoriteBorderOutlinedIcon sx={{ color: 'black' }} />
                    </Button>
                }
                {/* CHECKING IF THE CURRENT POKEMON IS FAVORITE OR NO TO DISPLAY THE RESPECTIVE BUTTON WITH FUNCION TO FAVORITE OR UNVAFORITE */}

                <Link to={`/pokemon/${props.id}`} >
                    <Button size="small" className="button">Details</Button>
                </Link>
            </CardActions>
        </Card>
    );
}
