import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {movieDbAction} from "../../redux";
import ReactPlayer from "react-player";

const MovieInfoPage = () => {

    const {id} = useParams();

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(movieDbAction.getVideo({id}))
        dispatch(movieDbAction.getColection({id:620873}))

    },[id])

    const {movieFind,video} = useSelector(state => state.movie);
    console.log(video)
    return (
        <div style={{height:'600px', width:'50%'}}>
            {video.length &&  <ReactPlayer
                url={video[0].key}
                className="react-player"
                //playing={video[0].key}
                controls
                onError={(error, data, hlsInstance, hlsGlobal) => {
                console.log(error, data, hlsInstance, hlsGlobal);
            }}
                width="100%"
                height="100%"
                />}
        </div>
    );
};

export {MovieInfoPage};