import {useEffect} from "react";
import {useDispatch} from "react-redux";

import {tvAction} from "../../redux";

const TvList = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(tvAction.getTvList())
    },[])
    return (
        <div>
            TvList
        </div>
    );
};

export {TvList};