import React, {useEffect, useState} from "react";
import "../../assets/stylesheets/Eliminar_Mascota.css";
import {Link} from "react-router-dom";



function Eliminar_Mascota(){

    const [idMascotas, setidMascotas] = useState(0);
    
    const eliminar = () => (
        fetch('http://localhost:18080/mascotas/'+ idMascotas, {
            method:'DELETE'
        })
            .then(res => res.json)
            .then(res => {alert("Se ha eliminado la mascota con el ID:"+idMascotas)})
            .catch((err) => console.error(err))
)

    return(
        <React.Fragment>
            <div className="Nav-COLOR">
                <nav>
                     <Link to="/Mascotas_Principal" className="Regreso_Delete" class="btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                     <h2 className="title">Eliminar</h2>
                </nav>
            </div>
            <div className="IDdueño_Delete mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agrege el ID</label>
                <input type="email" className="form-control" onChange={(event) => {setidMascotas(event.target.value)}} id="exampleFormControlInput1"
                       placeholder="IDmascota"/>
            </div>

            <button className=" btn btn-dark" type="button" id="button-addon1" onClick={eliminar}>Eliminar</button>
        </React.Fragment>
    )
}
export default Eliminar_Mascota;
