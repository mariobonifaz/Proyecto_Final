import React, {useState} from "react";
import "../../assets/stylesheets/Modificar_Mascotas.css";
import Add from "../../assets/img/Mascotas/Add_Petts.png"
import {Link} from "react-router-dom";

function Modificar_Citas (){

    const [idCita, setidCita] = useState(0);
    const [fecha, setfecha] = useState(0);
    const [servicio, setservicio] = useState('');
    const [hora, sethora] = useState('');
    const [idMascota, setidMascota] = useState('')

    const peticion = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(

            {
                "idCita": idCita,
                "fecha": fecha,
                "servicio": servicio,
                "hora": hora,
                "idMascota": idMascota
            }

        )
    }

    const modificar =async () => {
        const data = await fetch("http://localhost:18080/citas/update", peticion)
            .then(res => res.json)
            .then((data) => console.log(data))
            .catch((err) => console.error(err))
    }


    return(
        <div>
            <div className="Nav-COLOR">  <nav>
                <Link to="/Citas_Principal" className="Regreso_Add" class="btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Modificar</h2>
            </nav></div>
            <div className="NombreDueño1 mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">id citas</label>
                <input type="email" className="add_IDdueño form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setidCita(event.target.value)}}  placeholder="idCitas"/>
            </div>
            <div className="Direccion mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">fecha</label>
                <input type="email" className="add_IDmascota form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setfecha(event.target.value)}}  placeholder="00/00/0000"/>
            </div>
            <div className="NumTelefoico mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">servicio</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setservicio(event.target.value)}} placeholder="servicio"/>
            </div>
            <div className="IDMascota mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">hora</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {sethora(event.target.value)}} placeholder="hora"/>
            </div>
            <div className="IDdueño3 mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">id Mascota</label>
                <input type="email" className="add_IDdueño form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setidMascota(event.target.value)}} placeholder="idMascota"/>

                <button className=" btn btn-dark" onClick={modificar} type="button" id="button-addon1">Enviar</button>

            </div>


        </div>
    )
}
export default Modificar_Citas;