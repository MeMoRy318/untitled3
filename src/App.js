import {Navigate, Route, Routes} from "react-router-dom";

import {MaLayots} from "./layots";
import {FavoritePage, LoginFormPage, MovieInfoPage, MovieListPage, MoviePage} from "./pages";
import {MoviesFilterList, RegisteForm} from "./components";

function App() {
  return (
        <Routes>
            <Route path={"/"} element={<MaLayots/>}>
                <Route index element={<Navigate to={"movieList"}/>}/>
                <Route path={"login"} element={<LoginFormPage/>}/>
                <Route path={"register"} element={<RegisteForm/>}/>
                <Route path={"movieList"} element={<MovieListPage/>}/>
                <Route path={"movie"} element={<MoviePage/>}>
                    <Route path={"favorite"} element={<FavoritePage/>}/>
                    <Route path={':film/:with_genres/:primary_release_year/:sort_by'} element={<MoviesFilterList/>}/>
                </Route>
                <Route path={'moviInfo/:id'} element={<MovieInfoPage/>}/>
            </Route>
        </Routes>
  );
}

export default App;
