import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";

import css from "./loginForm.css"
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../../redux";

const LoginForm = () => {

    const {register,handleSubmit,formState:{errors},reset} = useForm();

    const navigate = useNavigate();

    const dispatch = useDispatch();

   const {user} = useSelector(state => state.login)

    function onSubmit(data) {

        if (user.login === data.login && user.password === data.password){
            navigate("/")
            dispatch(loginAction.login())
        }
    }

    return (
        <div className={"wrap_login_form"}>
            <div>
                <h2>Вход</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <h5>Email</h5>
                        <input className={"login_input"} type={"text"} {...register("login",{
                            required:true,
                            pattern:new RegExp(/^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i) })}/>
                    </label>
                    <label>
                        <h5>Пароль</h5>
                        <input className={"login_input"} type={"password"}{...register("password",{required:true})}/>
                    </label>
                    <br/>
                    <button className={"login_form_btn"}>Войти</button>
                    <br/>
                    <div className={"div_register"}>Нет аккаунта? <Link to={"/register"} className={"link_reister"}>Зарегистрироваться</Link></div>
                    <div>
                        {errors.login && <span>Неверно введен email</span>}
                        <br/>
                        {errors.password && <span>Неверно введен password</span>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export {LoginForm};