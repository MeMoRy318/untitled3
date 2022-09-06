import {useForm} from "react-hook-form";
import { FaSearch } from 'react-icons/fa';

import css from "./search.css"

const Search = () => {
    const {handleSubmit,register} = useForm();

    function onSubmit(data) {

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"form_searc"}>
            <input type={"text"} placeholder={"Поиск..."} {...register("searc")} className={"searc_input"}/>
            <button className={"search_btn"}>
                <FaSearch className={"test"} />
            </button>
        </form>


    );
};

export {Search};