import {axiosServices} from "./axios.services";
import {urls} from "../constans";

const movieServices = {

    getAllMovie:()=>axiosServices.get(urls.discoverMovie,{params:{
            api_key: '5692634a75bc2e4793815def806ccd24'
        }}),
    getAllMovieFilter:({with_genres,primary_release_year,sort_by,vote_average})=>axiosServices.get(urls.discoverMovie,{params:{
            api_key: '5692634a75bc2e4793815def806ccd24',
            with_genres,
            primary_release_year,
            sort_by,
            vote_average,

        }}),
    findMovieById:(id)=>axiosServices.get(`${urls.findMovie}/${id}`,{params:{
            api_key: '5692634a75bc2e4793815def806ccd24'
        }}),
    getVideos:(id)=>axiosServices.get(`${urls.findMovie}/${id}/videos`,{params:{
            api_key: '5692634a75bc2e4793815def806ccd24'
        }}),
    getCredits:(id)=>axiosServices.get(`${urls.findMovie}/${id}/credits`,{params:{
            api_key: '5692634a75bc2e4793815def806ccd24'
        }}),
    getColection:(id)=>axiosServices.get(`${urls.collection}/${id}`,{params:{
            api_key: '5692634a75bc2e4793815def806ccd24'
        }})
}
export {movieServices}
