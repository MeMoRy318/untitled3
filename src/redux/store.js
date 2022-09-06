import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReduser} from "./slices/movie.slice";
import {ganresReduser} from "./slices/ganres.slices";
import {tvReduser} from "./slices/tv.slice";
import {loginReduser} from "./slices/login.slice";



const rootReducers = combineReducers({
    movie:movieReduser,
    ganre:ganresReduser,
    tv:tvReduser,
    login:loginReduser
});

const setUpStore =()=> configureStore({
    reducer:rootReducers
});

export {setUpStore}