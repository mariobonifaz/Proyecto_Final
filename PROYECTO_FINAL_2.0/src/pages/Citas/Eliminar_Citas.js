import React, {useState} from "react";
import "../../assets/stylesheets/Eliminar_Mascota.css";
import {Link} from "react-router-dom";
import Gato from "../../assets/img/Mascotas/Gatoenojao.png"

function Eliminar_Citas(){

    const [idcita, setIdcita] = useState(0);

    const eliminar = () => (
        fetch('http://localhost:18080/citas/'+idcita, {
            method: 'DELETE'
        })
            .then(res => res.json)
            .then(res => {alert("Se ha eliminado la Cita con el ID:"+idcita)})
            .catch((err) => console.error(err))
    )


    return(
        <React.Fragment>
            <div className="Nav-COLOR">  <nav>
                <Link to="/Citas_Principal" className="Regreso_Delete" class="btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Eliminar</h2>
            </nav></div>
            <div className="IDdueño_Delete mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agrege el ID</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setIdcita(event.target.value)}} placeholder="ID Cita"/>
            </div>

            <button className=" btn btn-dark" onClick={eliminar} type="button" id="button-addon1">Eliminar</button>
        </React.Fragment>
    )
}
export default Eliminar_Citas;