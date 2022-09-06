import css from './topMovie.css'

const TopMovie = ({movie:{backdrop_path,title,overview}}) => {
    const str = overview.slice(0,200)
    return (
        <div className={"top_movie_wrap"}>
            <div className={"top_block"}>
                <h1>{title}</h1>
                <p className={"p_top"}><strong>{str}...</strong></p>
                <button className={'Button_btn__uFTPv'}>Потробнее</button>
            </div>
            <img src={backdrop_path} alt={title} className={"top_img"}/>
        </div>
    );
};

export {TopMovie};

