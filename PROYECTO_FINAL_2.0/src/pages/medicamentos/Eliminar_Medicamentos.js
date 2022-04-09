import React, {useState} from "react";
import "../../assets/stylesheets/Eliminar_Mascota.css";
import {Link} from "react-router-dom";

import Gato from "../../assets/img/Mascotas/Gatoenojao.png"


function Eliminar_Medicamentos(){

    const [idmedicamento, setidmedicamento] = useState(0);

    const eliminar = () => (
        fetch('http://localhost:18080/medicamentos/'+idmedicamento, {
            method: 'DELETE'
        })
            .then(res => res.json)
            .then(res => {alert("Se ha eliminado la Cita con el ID:"+idmedicamento)})
            .catch((err) => console.error(err))
    )


    return(
        <React.Fragment>
            <div className="Nav-COLOR">  <nav>
                <Link to="/Medicamentos_Principal" className="Regreso_Delete" class="btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Eliminar Medicamentos</h2>
            </nav></div>
            <div className="IDdueño_Delete mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">id medicamento</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setidmedicamento(event.target.value)}} placeholder="ID medicamento"/>
            </div>

            <button className=" btn btn-dark" onClick={eliminar} type="button" id="button-addon1">Eliminar</button>
        </React.Fragment>
    )
}
export default Eliminar_Medicamentos;