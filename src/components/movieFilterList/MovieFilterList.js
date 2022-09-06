import {useState} from "react";
import {Link} from "react-router-dom";

import { IoIosBookmark } from "react-icons/io"
import { AiOutlineCheck } from "react-icons/ai"

import css from "./movieFilterList.css"
import {movieDbAction} from "../../redux";

const MovieFilterList = ({movie,dispatch}) => {

    const str = movie.overview.slice(0,150)

    const [value,setValue] = useState('add_favorite');

    return (
        <div>
            {
                movie.poster_path !== "https://image.tmdb.org/t/p/original/null"  && <div className={"wrap_filter_block"}>
                    <hr/>
                    <div className={"wrap_movie_filter"}>

                        <div style={{width:'10%'}}>
                            <Link to={`/moviInfo/${movie.id}`}>
                                <img src={movie.poster_path} alt={movie.title} className={"img_movie_filter"}/>
                            </Link>
                        </div>
                        <div className={"title_filter_block"}>
                            <h4 style={{marginBottom:'1%'}}>{movie.title}</h4>
                            <div>{movie.release_date}</div>
                            <div>{str}...</div>
                        </div>
                        <div style={{width:'20%'}} className={"vote_average_filter"}>
                            <h3 className={movie.vote_average >= 5 ? "top_vote":"down_vote"  }>{movie.vote_average}</h3>
                            {
                                value === 'add_favorite' ? <button className={value} onClick={()=>{
                                        setValue('delete_favorite')
                                    dispatch(movieDbAction.setMovieFavorites(movie))

                                }}><IoIosBookmark/>Буду смотреть</button> :
                                <button className={value} onClick={()=>{
                                    setValue('add_favorite')
                                    dispatch(movieDbAction.deleteMovieFavorite(movie))
                                }}><AiOutlineCheck/>Буду смотреть</button>
                            }

                        </div>

                    </div>
                </div>
            }

        </div>


    );
};

export {MovieFilterList};