import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import "./App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import favoritePokemonsReducer from "./reducers/favoritePokemonsReducer";

function App() {
  const store = createStore(
    favoritePokemonsReducer
  ); /* CREATING STORAGE TO PROVIDE REDUCER */
  return (
    <div className="App">
      <Provider store={store}>
        {" "}
        {/* PROVIDING REDUCERS FOR EVERY CHILD */}
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} /> {/* HOMEPAGE - SIMPLE INDEX */}
              <Route exact path="/pokemon/:id" element={<Pokemon />} />{" "}
              {/* DYNAMIC PAGE TO LOAD SINGLEPAGE WITH POKEMON ID */}
              <Route path="/favorites" element={<Favorites />} />{" "}
              {/* FAVORITE PAGE */}
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
