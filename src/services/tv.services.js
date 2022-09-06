import {axiosServices} from "./axios.services";
import {urls} from "../constans";

const tvServices = {
    getAllTv:()=>axiosServices.get(urls.discoverTv,{params:{
            api_key: '5692634a75bc2e4793815def806ccd24',
            per_page:"10"
        }})
}

export {tvServices}