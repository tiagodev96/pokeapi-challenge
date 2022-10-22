import Navbar from '../Navbar'
import './style.sass'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/material';

const SinglePokemon = (props) => {
    const favoritePokemons = useSelector((state) => { return state })
    const dispatch = useDispatch();
    /* ACCESSING THE FAVORITE POKEMONS REDUCER */

    const typeHandler = (type) => {
        let typeIcon;

        switch (type) {
            case 'bug':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/bug-type-icon.svg" />
                break
            case 'dark':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/dark-type-icon.svg" />
                break
            case 'dragon':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/dragon-type-icon.svg" />
                break
            case 'electric':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/electric-type-icon.svg" />
                break
            case 'fairy':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/fairy-type-icon.svg" />
                break
            case 'fighting':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/fighting-type-icon.svg" />
                break
            case 'fire':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/fire-type-icon.svg" />
                break
            case 'flying':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/flying-type-icon.svg" />
                break
            case 'ghost':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/ghost-type-icon.svg" />
                break
            case 'grass':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/grass-type-icon.svg" />
                break
            case 'ground':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/ground-type-icon.svg" />
                break
            case 'ice':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/ice-type-icon.svg" />
                break
            case 'normal':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/normal-type-icon.svg" />
                break
            case 'poison':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/poison-type-icon.svg" />
                break
            case 'psychic':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/psychic-type-icon.svg" />
                break
            case 'rock':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/rock-type-icon.svg" />
                break
            case 'steel':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/steel-type-icon.svg" />
                break
            case 'water':
                typeIcon = <Box component="img" height="25px" src="/assets/images/type-icons/water-type-icon.svg" />
                break
            default:
                typeIcon = ''
        }

        return typeIcon;
    }


    return (
        <>
            <Navbar />
            <div className="grid">
                <div className="images">
                    <img src={props.frontImage} alt="" />
                    <img src={props.backImage} alt="" />
                </div>

                <div className="content">
                    <div className="info">
                        <p>ID:</p>
                        <h2>#{props.ID}</h2>
                    </div>
                    <div className="info">
                        <p>Name:</p>
                        <h2>{props.name}</h2>
                    </div>
                    <div className="info">
                        <p>Types:</p>
                        <div className="multiple-infos">
                            {props.types.map((type, key) => (
                                <h2 className={props.types.length >= 2 ? 'double-properties' : ''} key={key}>{type.type.name} {typeHandler(type.type.name)}</h2>
                            ))}
                        </div>
                    </div>
                    <div className="info">
                        <p>Abilities:</p>
                        <div className="multiple-infos">
                            {props.abilities.map((ability, key) => (
                                <h2 className={props.abilities.length >= 2 ? 'double-properties' : ''} key={key}>{ability.ability.name}</h2>
                            ))}
                        </div>
                    </div>
                    <div className="info">
                        <p>Height:</p>
                        <h2>{props.height}</h2>
                    </div>
                    <div className="info">
                        <p>Weight:</p>
                        <h2>{props.weight}</h2>
                    </div>

                    {favoritePokemons.includes(props.ID) ?
                        <div className="info" onClick={() => dispatch({ type: 'UNFAVORITE', payload: props.ID })}>
                            <FavoriteOutlinedIcon sx={{ cursor: 'pointer', color: 'red' }} />
                            <h2 style={{ cursor: 'pointer' }}>Undo Favorite</h2>
                        </div>
                        :
                        <div className="info" onClick={() => dispatch({ type: 'FAVORITE', payload: props.ID })}>
                            <FavoriteBorderOutlinedIcon sx={{ cursor: 'pointer' }} />
                            <h2 style={{ cursor: 'pointer' }}>Favorite</h2>
                        </div>
                    }
                    {/* CHECKING IF POKEMON IS FAVORITE OR ISN'T TO DISPLAY THE CORRECT BUTTON WITH RESPECTIVE FUNCTION WITH DISPATCH */}
                </div>
            </div>
        </>
    )
}

export default SinglePokemon
