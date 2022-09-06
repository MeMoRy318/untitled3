import {useDispatch, useSelector} from "react-redux";
import {Favorite} from "../../components";

const FavoritePage = () => {
    const {movieFavorits} = useSelector(state => state.movie);
    const dispatch = useDispatch();
    return (
        <div style={{width:'70%'}}>
            {movieFavorits.map((movieFavorits,index) =><Favorite key={index} movie={movieFavorits} dispatch={dispatch}/>)}
        </div>
    );
};

export {FavoritePage};