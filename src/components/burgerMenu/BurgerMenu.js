import css from "./burgerMenu.css"
import {Link} from "react-router-dom";

const BurgerMenu = () => {
    return (
        <div className={"burger_wrap"}>
            <nav role="navigation">
                <div id="menuToggle">

                    <input type="checkbox" />


                    <span></span>
                    <span></span>
                    <span></span>


                    <ul id="menu">
                        <Link to={'/'}><li>Главная</li></Link>
                        <Link to={'/movie/film/28/2022/primary_release_date.desc'}><li>Фильмы</li></Link>
                        <a href="#"><li>Сериалы</li></a>
                        <Link to={'movie/favorite'}><li>Избранное</li></Link>
                    </ul>
                </div>
            </nav>
            <div><span className={"left_logo"}>KINO</span><span className={"right_logo"}>MOVIE</span></div>
        </div>
    );
};

export {BurgerMenu};