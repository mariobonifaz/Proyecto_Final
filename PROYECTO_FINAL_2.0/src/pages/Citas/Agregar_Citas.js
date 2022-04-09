import React, {useState} from "react";
import "../../assets/stylesheets/Agregar_Mascota.css";
import Add from "../../assets/img/Mascotas/Add_Petts.png"
import {Link} from "react-router-dom";

function Agregar_Citas (){


    const [hora, sethora] = useState('');
    const [servicio, setservicio] = useState('');
    const [fecha, setfecha] = useState('');
    const [idMascota, setidMascota] = useState('');

    const peticion = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(

            {
                "fecha": fecha,
                "servicio": servicio,
                "hora": hora,

                "idMascota": idMascota
            }

        )
    }

    const agregar =async () => {
        const data = await fetch("http://localhost:18080/citas/add", peticion)
            .then(res => res.json)
            .then((data) => console.log(data))
            .catch((err) => console.error(err))
    }


    return(
        <div>
            <div className="Nav-COLOR">  <nav>
                <Link to="/Citas_Principal" className="Regreso_Add btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Agregar Citas</h2>
            </nav></div>
            <div className="NombreDueño1 mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">fecha</label>
                <input type="email" className="add_IDdueño form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setfecha(event.target.value)}} placeholder="fecha"/>
            </div>

            <div className="NumTelefoico mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">servicio</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setservicio(event.target.value)}}  placeholder="servicio"/>
            </div>
            <div className="IDMascota mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">hora</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {sethora(event.target.value)}} placeholder="00:00"/>
            </div>

            <div className="IDMascota mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">idMascota</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setidMascota(event.target.value)}} placeholder="idMascota"/>
            </div>








            <div className="IDdueño3 mb-3">

                <button className=" btn btn-dark" onClick={agregar} type="button" id="button-addon1">Enviar</button>

            </div>


        </div>
    )
}
    export default Agregar_Citas;