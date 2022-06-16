import React from "react";
import s from "./css/search.module.css";
import { useAppContext } from "../AppProvider";
import Axios from "axios";

 
export default function Search(){

    const { dispatch} = useAppContext();

    function handleSubmit(e){
        e.preventDefault();
        let dato = e.target.buscar.value
        Axios.get("http://localhost:3001/api/reg/search/" + dato)
        .then(res => dispatch({type: "SEARCH_COWS", payload: res.data}));
    }


    return(
        <div className={s.container}>
           <form action="" className={s.form} onSubmit={handleSubmit}>
                <input  type="text" name="buscar" placeholder="Buscar..." className={s.input} / >
                <button type="submit" className={s.button} >Buscar</button>
           </form>
        </div>
    )
}