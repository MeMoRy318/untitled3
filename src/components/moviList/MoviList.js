import css from './moviList.css'

const MoviList = ({movie:{id,title,overview,poster_path,backdrop_path,original_title,release_date,vote_average}}) => {
    return (
        <div className={"movie_block"}>
            <div className={vote_average > 5 ? "top":"down"}>{vote_average}</div>
            <img src={poster_path} alt={title} className={"img_movie"}/>
                <h3 className={"movie_title"}>{title}</h3>
                <div className={"release_movie"}>{release_date}, Фильм</div>


        </div>
    );
};

export {MoviList};