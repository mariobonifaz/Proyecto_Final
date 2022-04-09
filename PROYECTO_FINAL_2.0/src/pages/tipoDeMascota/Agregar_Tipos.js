import React, {useState} from "react";
import "../../assets/stylesheets/Agregar_Mascota.css";
import Add from "../../assets/img/Mascotas/Add_Petts.png"
import {Link} from "react-router-dom";

function Agregar_Tipos (){

    const [idTipo, setidTipo] = useState(0);
    const [nombre, setnombre] = useState('');
    const [caracteristicas, setcaracteristicas] = useState(''
    )
    const peticion = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(

            {
                "idTipo": idTipo,
                "nombre" : nombre,
                "caracteristicas": caracteristicas
            }

        )
    }

    const agregar =async () => {
        const data = await fetch("http://localhost:18080/tipoMascota/add", peticion)
            .then(res => res.json)
            .then((data) => console.log(data))
            .catch((err) => console.error(err))
    }


    return(
        <div>
            <div className="Nav-COLOR">  <nav>
                <Link to="/TipoDeMascotas_Principal" className="Regreso_Add" class="btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Agregar tipos de mascotas</h2>
            </nav></div>
            <div className="NombreDueño1 mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agregue el idTipo</label>
                <input type="email" className="add_IDdueño form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setidTipo(event.target.value)}} placeholder="idTipo"/>
            </div>
            <div className="Direccion mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agrege nombre</label>
                <input type="email" className="add_IDmascota form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setnombre(event.target.value)}} placeholder="nombre"/>
            </div>
            <div className="NumTelefoico mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">caracteristicas</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setcaracteristicas(event.target.value)}} placeholder="caracteristicas"/>
            </div>

            <div className="IDdueño3 mb-3">

                <button className=" btn btn-dark" type="button" onClick={agregar} id="button-addon1">Enviar</button>

            </div>


        </div>
    )
}
export default Agregar_Tipos;