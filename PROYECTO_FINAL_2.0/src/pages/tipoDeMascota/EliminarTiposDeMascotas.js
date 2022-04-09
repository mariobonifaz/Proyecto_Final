import React, {useState} from "react";
import "../../assets/stylesheets/Eliminar_Mascota.css";
import {Link} from "react-router-dom";
import Gato from "../../assets/img/Mascotas/Gatoenojao.png"

function Eliminar_TiposDeMascotas(){

    const [idtipo, setidtipo] = useState(0);

    const eliminar = () => (
        fetch('http://localhost:18080/tipoMascota/'+ idtipo, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(res => {alert("Se ha eliminado el Dueño con el ID:"+idtipo)})
            .catch((err) => console.error(err))
    )


    return(
        <React.Fragment>
            <div className="Nav-COLOR">  <nav>
                <Link to="/TipoDeMascotas_Principal" className="Regreso_Delete btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Eliminar tipos de mascotas</h2>
            </nav></div>
            <div className="IDdueño_Delete mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agrege el ID</label>
                <input type="email" className="form-control" onChange={(event) => {setidtipo(event.target.value)}} id="exampleFormControlInput1"
                       placeholder="IDdueño"/>
            </div>

            <button className=" btn btn-dark" type="button" onClick={eliminar} id="button-addon1">Eliminar</button>
        </React.Fragment>
    )
}
export default Eliminar_TiposDeMascotas;