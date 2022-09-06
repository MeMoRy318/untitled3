import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Outlet, useParams} from "react-router-dom";

import css from './moviePage.css'

import {FilterForm, MoviesFilterList} from "../../components";
import {ganresAction, movieDbAction} from "../../redux";



const MoviePage = () => {


    const dispatch = useDispatch();
    useEffect(()=>{
         dispatch(ganresAction.getAllGanre())
    },[])


    const {ganres} = useSelector(state => state.ganre)

    return (
        <div className={"wrap_filter_movie_list"}>
                <FilterForm ganres={ganres}/>

                <Outlet/>

        </div>
    );
};

export {MoviePage};