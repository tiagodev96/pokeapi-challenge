const localStorage = JSON.parse(
  window.localStorage.getItem("FAVORITE_POKEMONS")
); /* GETTING THE LOCALSTORAGE STATE */

console.log(localStorage);
const initialState =
  localStorage === null
    ? []
    : localStorage; /* INITIALIZE WITH EMPTY ARRAY IF LOCALSTORAGE IS EMPTY (NULL) */

export default function favoritePokemonsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "FAVORITE":
      let newState = [...state, payload];
      window.localStorage.setItem(
        "FAVORITE_POKEMONS",
        JSON.stringify(newState)
      ); /* SAVING ON LOCALSTORAGE WITH UPDATED FAVORITE POKEMONS LIST */
      return [...state, payload];

    case "UNFAVORITE":
      let index = state.indexOf(payload);
      if (index > -1) {
        state.splice(index, 1);
        window.localStorage.setItem(
          "FAVORITE_POKEMONS",
          JSON.stringify(state)
        ); /* REMOVING FROM LOCALSTORAGE WITH UPDATED FAVORITE POKEMONS LIST */
        return [...state];
      } else {
        return [...state];
      }

    default:
      return state;
  }
}
