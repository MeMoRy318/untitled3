import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieDbAction} from "../../redux";
import {MovieFilterList} from "../movieFilterList/MovieFilterList";

const MoviesFilterList = () => {

    const {with_genres,primary_release_year,sort_by,vote_averagegte,vote_averagelte} = useParams()

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(movieDbAction.getMovieFilter({with_genres,primary_release_year,sort_by,vote_average:{gte:vote_averagegte,lte:vote_averagelte}}))

    },[with_genres,primary_release_year,sort_by,vote_averagegte,vote_averagelte])

    const {movieFilter} = useSelector(state => state.movie)



    return (
        <div style={{width:'70%' , background:'white', paddingRight:'2%', paddingTop:'4%'}}>
            {movieFilter.map((movieFilter,index)=> <MovieFilterList key={index} movie={movieFilter} dispatch={dispatch}/>)}
        </div>
    );
};

export {MoviesFilterList};