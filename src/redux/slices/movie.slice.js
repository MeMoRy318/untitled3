import {movieServices} from "../../services";
import {urls} from "../../constans";


import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    movie:[],
    movieFilter:[],
    movieFavorits:[],
    colection:[],
    credits:[],
    video:[],
    isLoading:false,
    errors:null,
    movieFind:[]

};

const getMovie = createAsyncThunk(
    'movieSlice/getMovie',
    async (_,{rejectWithValue})=>{

        try {
            const {data} = await movieServices.getAllMovie();

            return data;

        }catch (e) {

            return rejectWithValue(e.response.data)

        }
    }
);
const getMovieFilter = createAsyncThunk(
    'movieSlice/getMovieFilter',
    async ({with_genres,primary_release_year,sort_by,vote_average},{rejectWithValue})=>{

        try {
            const {data} = await movieServices.getAllMovieFilter({with_genres,primary_release_year,sort_by,vote_average});
            return data;

        }catch (e) {

            return rejectWithValue(e.response.data)

        }
    }
);

const findMovie = createAsyncThunk(
    'findMovie',
    async ({id},{rejectWithValue})=>{
        try {
            const {data} = await movieServices.findMovieById(id)
            const arr = [];
            arr.push(data)
            return arr

        }catch (e) {
            rejectWithValue(e.response.data)
        }
    }
)

const getColection = createAsyncThunk(
    'getColection',
    async ({id},{rejectWithValue})=>{
        try {
            const {data:{parts}} = await movieServices.getColection(id)

            return parts

        }catch (e) {

           return  rejectWithValue(e.response.data)

        }
    }
)

const getCredits = createAsyncThunk(
    'getCredits',
    async ({id},{rejectWithValue})=>{
        try {
            const {data:{cast}} = await movieServices.getCredits(id)
            console.log(cast)

            return cast
        }catch (e) {
            rejectWithValue(e.response.data)
        }
    }
)

const getVideo = createAsyncThunk(
    'getVideo',
    async ({id},{rejectWithValue})=>{
        try {
           const {data:{results}} = await movieServices.getVideos(id)
            return results
        }catch (e) {
            return rejectWithValue(e.response.data)

        }
    }
)




const movieSlice = createSlice({
    name:"movieSlice",
    initialState,
    reducers:{
        setMovieFavorites:(state, action)=>{
          state.movieFavorits.push(action.payload)
        },
        deleteMovieFavorite:(state, action)=>{
            const  index = state.movieFavorits.findIndex(value => value.id === action.payload.id)
            state.movieFavorits.splice(index,1)
        }
    },
    extraReducers:(builder)=>
        builder
            .addCase(getMovie.pending,(state, action)=>{
                state.isLoading = true;
            })
            .addCase(getMovie.fulfilled,(state, action)=>{
                state.isLoading = false;
                state.movie = action.payload.results.map((m)=>({
                    backdrop_path: urls.posterUrl + m['backdrop_path'],
                    id: m['id'],
                    original_title: m['original_title'],
                    overview: m['overview'],
                    poster_path: urls.posterUrl + m['poster_path'],
                    release_date: m['release_date'],
                    title: m['title'],
                    vote_average:m['vote_average']
                }))


            })
            .addCase(getMovieFilter.pending,(state, action)=>{
                state.isLoading = true;
            })
            .addCase(getMovieFilter.fulfilled,(state, action)=>{
                state.isLoading = false;
                state.movieFilter = action.payload.results.map((m)=>({
                    backdrop_path: urls.posterUrl + m['backdrop_path'],
                    id: m['id'],
                    original_title: m['original_title'],
                    overview: m['overview'],
                    poster_path: urls.posterUrl + m['poster_path'],
                    release_date: m['release_date'],
                    title: m['title'],
                    vote_average:m['vote_average']
                }))


            })
            .addCase(findMovie.pending,(state, action)=>{
                state.isLoading = true
            })
            .addCase(findMovie.fulfilled,(state, action)=>{
                state.isLoading = false
                state.movieFind = action.payload.map((m)=>({
                    id:m['id'],
                    collection:m['belongs_to_collection']?.id,
                    budget:m['budget'],
                    genres:m['genres'],
                    title:m['original_title'],
                    overview:m['overview'],
                    poster_path:urls.posterUrl + m['poster_path'],
                    release_date:m['release_date'],
                    sbor:m['revenue'],
                    runtime:m['runtime'],
                    vote_average:m['vote_average'],
                    production_companies:m['production_countries'][0]?.name


                }))
            })
            .addCase(getColection.pending,(state, action)=>{
                state.isLoading = true;
            })
            .addCase(getColection.fulfilled,(state, action)=>{
                state.isLoading = false;
                state.colection = action.payload.map((m) =>({
                    id:m['id'],
                    poster_path:urls.posterUrl + m['poster_path'],
                    title:m['title']

                }))
            })
            .addCase(getCredits.pending,(state, action)=>{
                state.isLoading = true
            })
            .addCase(getCredits.fulfilled,(state, action)=>{
                state.isLoading = false
                state.credits = action.payload.map((m)=>({
                    character:m['character'],
                    original_name:m['original_name'],
                    profile_path:urls.posterUrl + m['profile_path']
                }))
            })
            .addCase(getVideo.pending,(state, action) =>{
                state.isLoading = true
            })
            .addCase(getVideo.fulfilled,(state, action) =>{
                state.isLoading = false;
               const asd = []
                asd.push(action.payload.find(m => m['type'] === 'Trailer'))
                state.video = asd.map((m) =>({
                    key:'https://www.youtube.com/watch?v=' + m['key']
                }))

            })
            .addDefaultCase((state, action)=>{

            const [type] = action.type.split('/').splice(-1);

            if (type === 'rejected') {
                state.errors = action.payload
            } else {
                state.errors = null
            }
        })
});

const {reducer:movieReduser,actions:{setMovieFavorites,deleteMovieFavorite}} = movieSlice

const movieDbAction = {
    getMovie,
    getMovieFilter,
    findMovie,
    getColection,
    getCredits,
    getVideo,
    setMovieFavorites,
    deleteMovieFavorite,

}

export {movieReduser,movieDbAction}