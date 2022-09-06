import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './movieList.css'

import {movieDbAction} from "../../redux";
import {MoviList} from "../moviList/MoviList";
import {TopMovie} from "../topMovie/TopMovie";
import {Link} from "react-router-dom";

const MovieList = () => {


    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(movieDbAction.getMovie())
    },[])

    const {movie} = useSelector(state => state.movie)

    const [value,setValue] = useState(9);



    return (
        <div className={"movie_wrap"}>
            { movie.length &&
                <TopMovie movie={movie[0]}/>
            }
            <div className={"btn_sy_all"}><button onClick={()=>setValue(19)} className={"Button_btn__uFTPv"}>Смотреть все</button></div>
            <div className={"movi_block"}>
                {movie.map((movie,index) => index <= value &&  <MoviList key={index} movie={movie}/> )}
                {value === 9 ? <button onClick={()=>setValue(19)} className={"Button_btn__uFTPv"}>Показать еще</button> :
                   <Link to={"/movie/film/28/2022/primary_release_date.desc"}><button className={"Button_btn__uFTPv"}>Смотреть все</button></Link>
                }

            </div>
        </div>
    );
};

export {MovieList};