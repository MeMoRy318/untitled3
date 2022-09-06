import {axiosServices} from "./axios.services";
import {urls} from "../constans";

const ganreServices = {

    getAllGanre:()=>axiosServices.get(urls.genre,{params:{
            api_key: '5692634a75bc2e4793815def806ccd24'
        }})
};

export {ganreServices}