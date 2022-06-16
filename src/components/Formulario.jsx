import s from './css/form.module.css';
import { useState } from 'react';
import {useForm} from 'react-hook-form';
import Nav from './Nav';
import { Link , useParams } from 'react-router-dom';
import { useAppContext } from "../AppProvider";
import Axios from "axios";


const Form = () => {

    let { id } = useParams();

    const {dispatch} = useAppContext();
  
    const [resultado, setResult] = useState({});

    const {register,formState:{errors}, handleSubmit} = useForm();

    const onSubmit = (data) => {

        if (id) {
            Axios.put("http://localhost:3001/api/reg/" + id, data).then(() =>
              dispatch({ type: "UPDATE_COW", payload: data })
            );
            dispatch({ type: "SELECTED_COW", payload: data });
            setResult({ mensaje: "Registro actualizado correctamente" });
          } else {
            Axios.post("http://localhost:3001/api/reg", data).then(() =>
              dispatch({ type: "ADD_COW", payload: data })
            );
    }
}

    return (
        <>
            <Nav />
        <div className={s.container}>
            <h2>Formulario</h2>
           
                <form className={s.form} onSubmit={handleSubmit(onSubmit)} >
                    <div className={s.row}>
                    <div>
                        <label className={s.label}>idSenasa</label>
                        <input className={s.input} type="text" {...register('idSenasa', {minLength:{value:16, message:"Debe tener 16 caracteres"}, 
                        maxLength:{value:16, message:"Debe tener 16 caracteres"},
                        required:{value:true, message:"El campo es requerido"},
                         pattern: {value: /^[A-Za-z0-9]+$/i, message:"Debe contener solo letras y números " }})} />
                        <div>
                        {errors.idSenasa && <span className={s.error}>{errors.idSenasa.message} </span>}
                        </div>
                    </div>
                    <div>
                        <label className={s.label}>Tipo de Animal</label>
                    <select className={s.select} {...register('animal', {required:{value:true, message:"El campo es requerido"}})}>
                        <option value="novillo">Novillo</option>
                        <option value="toro">Toro</option>
                        <option value="vaquillona">Vaquillona</option>
                    </select>
                    <div>
                    {errors.animal && <span className={s.error}>{errors.animal.message }</span>}
                    </div>
                    </div>
                  
                    <div>
                        <label className={s.label}>Peso en Kg.</label>
                        <input className={s.input} type="number" {...register('peso', {required:{value:true, message:"El campo es requerido"},
                         min:{value:0, message:"No puede tener números negativos"}, 
                         max:{value: 4000, message:"Máximo 4000 KG."}, 
                         pattern:{value:/^[0-9]+$/i, message: "Deben ser solo números enteros"}})}/>
                         <div>
                        {errors.peso && <span className={s.error}>{errors.peso.message} </span>}
                        </div>
                    </div>
                    </div>
                    <div className={s.row}>
                    <div className={s.group}>
                        <label className={s.label}>Nombre del Potrero</label>
                        <input className={s.input} style={{width:"100%"}} type="text" {...register('potrero', {required:{value:true, message:"El campo requerido"}, 
                        maxLength:{value:200, message:"Máximo 200 caracteres"}})} />
                        <div>
                        {errors.potrero && <span className={s.error}>{errors.potrero.message} </span>}
                        </div>
                    </div>
                    </div>
                    <div className={s.row} style={{justifyContent:"space-evenly"}}>
                    <div>
                        <label className={s.label}>Tipo de Dispositivo</label>
                    <select className={s.select}{...register('dispositivo',{required:{value:true, message:"Campo requerido"}})}>
                        <option value="collar">Collar</option>
                        <option value="caravana">Caravana</option>
                    </select>
                    <div>
                    {errors.dispositivo && <span className={s.error}>{errors.dispositivo.message} </span>}
                    </div>
                    </div>
                    <div>
                        <label className={s.label}>Nro de Dispositivo</label>
                        <input className={s.input} type="text" {...register('nroDispositivo', {required:{value:true, message:"El campo es requerido"},
                         minLength:{value:8, message:"Debe tener 8 caracteres"}, 
                         maxLength:{value:8, message:"Debe tener 8 caracteres"}})} />
                         <div>
                         {errors.nroDispositivo && <span className={s.error}>{errors.nroDispositivo.message} </span>}
                         </div>
                    </div>
                    </div>
                    <div>
                        <input className={s.btn} type="submit" value= "Enviar" />
                    </div>
                </form>
                {resultado.mensaje && <p className={s.result}>{resultado.mensaje}</p>}
        </div>
        <div style={{ width: "100px", margin: "20px" }}>
        <Link to="/">
          <button className={s.btn}>Volver</button>
        </Link>
      </div>
        </>
    )
};

export default Form;