import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import css from "./registerForm.css"
import {loginAction} from "../../redux";

const RegisteForm = () => {

    const {register,handleSubmit,formState:{errors},reset} = useForm();

    const navigate = useNavigate();

    let dispatch = useDispatch();

    function onSubmit(data) {
        if (data){
            dispatch(loginAction.register(data))
            navigate("/login")
        }
    }

    return (
        <div className={"wrap_login_form"}>
            <div>
                <h2>Регистрация</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={"div_name_surname"}>
                        <label>
                            <h5>Имя</h5>
                            <input type="text" className={"reister_name_input"} {...register("name",{required:true})}/>
                        </label>
                        <label>
                            <h5>Фамилия</h5>
                            <input type="text" className={"reister_surname_input"}{...register("surname",{required:true})}/>
                        </label>
                    </div>
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
                    <button className={"login_form_btn"}>Зарегистрироваться </button>
                    <br/>
                    <div className={"div_register"}>Есть аккаунт? <Link to={"/login"} className={"link_reister"}>Войти</Link></div>
                    <div className={"errors_form"}>
                        {errors.login && <span>Неверно введен name</span>}
                        <br/>
                        {errors.password && <span>Неверно введен surname</span>}
                        <br/>
                        {errors.name && <span>Неверно введен email</span>}
                        <br/>
                        {errors.surname && <span>Неверно введен password</span>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export {RegisteForm};