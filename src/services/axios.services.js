import axios from "axios";
import {baseURL} from "../constans";

 const axiosServices = axios.create({baseURL});

axiosServices.interceptors.request.use((config)=>{
    const access = '5692634a75bc2e4793815def806ccd24';
     config.headers.Authorization = `Bearer ${access}`;
     return config;
});

export {axiosServices}