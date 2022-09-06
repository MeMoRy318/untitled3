import {useForm} from "react-hook-form";

import css from './filterForm.css'
import {useNavigate, useParams} from "react-router-dom";

const FilterForm = ({ganres}) => {
    const {film} = useParams();
    const asd = film

    const {register,handleSubmit,reset,getValues} = useForm();

    const navigate = useNavigate();

    function onSubmit(data) {
        if (asd === "film"){
            navigate(`/movie/film/${data.with_genres === "" ? 28 : data.with_genres}/${data.primary_release_year}/${data.sort_by}`)
        }
    }

    return (
        <div className={"wrap_filter_form"}>
            <h2 style={{fontSize:'36px'}}>Все фильмы</h2>
            <div >Подборка фильмов всего мира</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className={'h2_reyting'}>Рейтинг</h4>

                <div className={"filter_vote"}>

                    <div>
                        <h5>От</h5>
                        <input type="number" {...register("vote_averagegte")} min={1} max={10} defaultValue={1} className={'TextField_textField__Tqze_'}/>

                    </div>

                    <div>
                        <h5>До</h5>
                        <input type="number" {...register("vote_averagelte")} min={1} max={10} defaultValue={10} className={'TextField_textField__Tqze_'}/>

                    </div>

                </div>

                <div >

                    <h4>Год производства</h4>

                    <input type="number" {...register("primary_release_year")}
                           min={1980} max={new Date().getFullYear()} defaultValue={new Date().getFullYear()} className={"primary_release_year"} />

                </div>

                <div>
                    <h4>Жанры</h4>
                    <select {...register('with_genres')} className={"with_genres"} defaultValue={28}>
                        {ganres.length && ganres.map((ganres,index) => <option value={ganres.id} key={index}>{ganres.name}</option>)}
                    </select>
                </div>

                <div>

                    <div>

                        <input type="radio" {...register('sort_by')} value={"primary_release_date.desc"} className={'Radio_input__rfCBC'} defaultChecked={true}/>
                        Сначала новые

                    </div>

                    <div className={"radio_block"}>
                        <input type="radio" {...register('sort_by')} value={"primary_release_date.asc"} className={'Radio_input__rfCBC'}/>
                        Сначала старые

                    </div>
                    <div className={"radio_block"}>
                        <input type="radio" {...register('sort_by')} value={"popularity.desc"} className={'Radio_input__rfCBC'}/>
                        Сначала популярные

                    </div>

                </div>
                <button className={'Button_btn_uFTPv'}>Применить</button>

            </form>

            <button className={'Button_btn'} onClick={()=>reset()}>Сбросить</button>

        </div>
    );
};

export {FilterForm};