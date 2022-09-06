import { AiOutlineCheck } from "react-icons/ai"

import {movieDbAction} from "../../redux";
import {IoIosBookmark} from "react-icons/io";

const Favorite = ({movie,dispatch}) => {

    const str = movie.overview.slice(0,150)

    return (
        <div>

                 <div className={"wrap_filter_block"}>
                    <hr/>
                    <div className={"wrap_movie_filter"}>

                        <div style={{width:'10%'}}>
                            <img src={movie.poster_path} alt={movie.title} className={"img_movie_filter"}/>
                        </div>
                        <div className={"title_filter_block"}>
                            <h4 style={{marginBottom:'1%'}}>{movie.title}</h4>
                            <div>{movie.release_date}</div>
                            <div>{str}...</div>
                        </div>
                        <div style={{width:'20%'}} className={"vote_average_filter"}>
                            <h3 className={movie.vote_average >= 5 ? "top_vote":"down_vote"  }>{movie.vote_average}</h3>

                          <button className={'delete_favorite'} onClick={()=>dispatch(movieDbAction.deleteMovieFavorite(movie))}><AiOutlineCheck/>Буду смотреть</button>


                        </div>

                    </div>
                </div>


        </div>
    );
};

export {Favorite};

