import React, {useEffect} from "react";
import Nav from "./Nav";
import Table from "./Table";
import Search from "./Search";
import { Link } from "react-router-dom";
import s from "./css/home.module.css";
import { useAppContext } from "../AppProvider";
import Axios from "axios";


export default function Home() {

    const {dispatch } = useAppContext();
   
    useEffect(() => {
        Axios.get("http://localhost:3001/api/reg")
        .then(res => {
            dispatch({type: "GET_COWS", payload: res.data});
        })
    
    }, []);

    return (
       
        <div className={s.container} >
            <Nav />
      <Link to="/form" style={{textDecoration:"none"}}><p className={s.carga} >Cargar un nuevo animal para este Establecimiento Ganadero</p></Link>    
            <Search />
            <Table />
        </div>
   
    );
};