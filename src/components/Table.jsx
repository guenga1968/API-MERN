import React from "react";
import s from "./css/table.module.css";
import borrar from "../images/borrar.png";
import editar from "../images/editar.png";
import {Link} from "react-router-dom";
import { useAppContext } from "../AppProvider";
import Axios from "axios";

export default function Table() {

 const {cows, dispatch} = useAppContext();

function handleDelete(id) {
    Axios.delete('http://localhost:3001/api/reg/'+id)
    .then(()=> dispatch({type: "DELETE_COW", payload: id}));
        alert("Registo borrado correctamente");
}

//------------------------------------- RENDER -------------------------------------
    return (
        <div className={s.container}>
            <h1>Establecimiento Ganadero</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id SENASA</th>
                        <th>Tipo de Animal</th>
                        <th>Peso en Kg.</th>
                        <th>Nombre del Potrero</th>
                        <th>Dispositivo</th>
                        <th>Nro. Dispositivo</th>
                        <th><img src={editar} alt="editar"  /></th>
                        <th><img src={borrar} alt="borrar"  /></th>
                    </tr>
                </thead>
                <tbody>
                    {cows.map(item => (
                        <tr key={item._id}>
                            <td>{item.idSenasa}</td>
                            <td>{item.tipoAnimal}</td>
                            <td>{item.peso}</td>
                            <td>{item.potrero}</td>
                            <td>{item.dispositivo}</td>
                            <td>{item.nroDispositivo}</td>
                            <td><Link to={`/form/${item._id}`} ><img src={editar} alt="editar"  /></Link></td>
                            <td><img src={borrar} alt="borrar" onClick={() => handleDelete(item._id)} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}