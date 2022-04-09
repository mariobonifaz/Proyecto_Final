import React, {useState} from "react";
import "../../assets/stylesheets/Agregar_Mascota.css";
import Add from "../../assets/img/Mascotas/Add_Petts.png"
import {Link} from "react-router-dom";

function Agregar_Medicamentos (){


    const [idMedicamento, setidMedicamento] = useState(0);
    const [nombre, setnombre] = useState('');
    const [sustancia, setsustancia] = useState('');


    const peticion = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(

            {
                "idMedicamento": idMedicamento,
                "nombre": nombre,
                "sustancia": sustancia
            }

        )
    }

    const agregar =async () => {
        const data = await fetch("http://localhost:18080/medicamentos/add", peticion)
            .then(res => res.json)
            .then((data) => console.log(data))
            .catch((err) => console.error(err))
    }


    return(
        <div>
            <div className="Nav-COLOR">  <nav>
                <Link to="/Medicamentos_Principal" className="Regreso_Add btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Agregar Medicamentos</h2>
            </nav></div>
            <div className="NombreDueño1 mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">idMedicamento</label>
                <input type="email" className="add_IDdueño form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setidMedicamento(event.target.value)}} placeholder="idMedicamento"/>
            </div>

            <div className="NumTelefoico mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">nombre</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setnombre(event.target.value)}}  placeholder="nombre"/>
            </div>
            <div className="IDMascota mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">sustancia</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setsustancia(event.target.value)}} placeholder="sustancia"/>
            </div>









            <div className="IDdueño3 mb-3">

                <button className=" btn btn-dark" onClick={agregar} type="button" id="button-addon1">Enviar</button>

            </div>


        </div>
    )
}
export default Agregar_Medicamentos;