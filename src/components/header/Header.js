import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from "./header.css"

import {loginAction} from "../../redux";
import {BurgerMenu} from "../burgerMenu/BurgerMenu";
import {Search} from "../search/Search";
import {UserInfo} from "../userInfo/UserInfo";

const Header = () => {

    const {user,auth} = useSelector(state => state.login)

    const dispatch = useDispatch();


    return (
        <div className={"header"}>
            <BurgerMenu/>
            <Search/>

            <div className={"wrap_user_info"}>
                {user.login ?
                    <button className={"login_btn"} onClick={()=> dispatch(loginAction.exit())}>Вийти</button>
                    :
                    <Link to={"login"}><button className={"login_btn"}>Войти</button></Link>
                }

                { auth && <UserInfo/>}


            </div>

        </div>
    );
};

export {Header};