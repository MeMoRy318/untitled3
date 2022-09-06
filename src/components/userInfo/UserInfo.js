import {useState} from "react";
import {useSelector} from "react-redux";

import css from './userinfo.css'

const UserInfo = () => {

    const [className,setClassName] = useState("off");

   const {user:{name,surname,login}} = useSelector(state => state.login)


    return (
        <div className={"wrap_user_info"}>
            <div className={"user_info"} onClick={()=>{
                className === "off" ? setClassName("on")  : setClassName("off")
            }}>{name[0]}</div>

            <div className={className}>
                <div className={"wrap_asd"}>
                    <div className={"user_info_img"}>{name[0]}</div>
                </div>
                <div className={"asd"}>
                    <div className={"asd_item"}>
                        <div>{login}</div>
                        <div>{name} {surname}</div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export {UserInfo};