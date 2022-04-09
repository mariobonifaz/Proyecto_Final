import React, {useState} from "react";
import "../../assets/stylesheets/Agregar_Mascota.css";

import {Link} from "react-router-dom";

function Agregar_Mascotas (){


    const [idMascotas, setidMascotas] = useState(0);
    const [idDueno, setidDueno] = useState();
    const [nombre, setnombre] = useState('');
    const [tipo, settipo] = useState('');
    const [fechaIngreso, setfechaIngreso] = useState('');


    const peticion = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(

            {
                "idMascotas": idMascotas,
                "idDueno": idDueno,
                "nombre": nombre,
                "tipo": tipo,
                "fechaIngreso": fechaIngreso

            }

        )
    }
    
    const agregar =async () => {
        const data = await fetch("http://localhost:18080/mascotas/add", peticion)
            .then(res => res.json)
            .then((data) => console.log(data))
            .catch((err) => console.error(err))
    }
    
    return(
        <div>
            <div className="Nav-COLOR">  <nav>
                <Link to="/Mascotas_Principal" className="Regreso_Add" class="btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Agregar mascota</h2>
            </nav></div>
            <div className="IDdueño mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">idMascotas</label>
                <input type="email" className="add_IDdueño form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setidMascotas(event.target.value)}} placeholder="idMascotas"/>
            </div>
            <div className="IDmascota mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">idDueno</label>
                <input type="email" className="add_IDmascota form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setidDueno(event.target.value)}} placeholder="idDueno"/>
            </div>
            <div className="IDmascota mb-3">

                <label htmlFor="exampleFormControlInput1" className="form-label">nombre</label>
                <input type="email" className="add_IDmascota form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setnombre(event.target.value)}} placeholder="nombre"/>
            </div>



            <div className="Nombre mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">fechaIngreso</label>
                <input type="email" className="add_Name form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setfechaIngreso(event.target.value)}} placeholder="fechaIngreso"/>

                <div className="IDmascota mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">tipo</label>
                    <input type="email" className="add_IDmascota form-control" id="exampleFormControlInput1"
                           onChange={(event) => {settipo(event.target.value)}} placeholder="tipo"/>
                </div>



                <button className=" btn btn-dark" onClick={agregar} type="button" id="button-addon1">Enviar</button>

            </div>





        </div>
    )
}
    export default Agregar_Mascotas;
