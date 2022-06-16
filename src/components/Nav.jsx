import React from "react";
import vaca from "../images/vaca.png";
import notif from '../images/campana.png';
import login from '../images/ingresar1.png';
import s from './css/nav.module.css';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className={s.container}>
        <Link to="/">  <img className={s.logo} src={vaca} alt="logo" /></Link>
           <div>
            <img className={s.icons} src={notif} alt="notif" />
            <img className={s.icons} src={login} alt="login" />
            </div>
        </div>
    );
};
