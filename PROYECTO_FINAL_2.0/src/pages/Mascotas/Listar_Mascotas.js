import React, {useEffect, useState} from "react";

import {Link} from "react-router-dom";
import Filas_Listar_Mascota from "../../Componentes/Mascotas/Filas_Listar_Mascota";


function Listar_Mascotas(){

    const [listar, setListar] = useState([]);


    const obtenerDatos = async ()=>{
        const data = await fetch('http://localhost:18080/mascotas/list');
        const mascotas = await data.json()
        setListar(mascotas);
    }


    useEffect(() => {
        obtenerDatos()
    });


    return(
        <React.Fragment>
            <div className="Nav-COLOR">  <nav>
                <Link to="/Mascotas_Principal" className="Regreso_List" class="btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Mostrar</h2>
            </nav></div>
            <p class="text-center fs-1">Mascotas Agregadas Recientemente</p>
            <div className="Table">
                <table className="table" class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">idMascotas</th>
                        <th scope="col">idDueno</th>
                        <th scope="col">nombre</th>
                        <th scope="col">tipo</th>
                        <th scope="col">fechaIngreso</th>
                    </tr>
                    </thead>

                    <tbody>

                    {listar.map(mascotas => (

                        <Filas_Listar_Mascota idMascotas={mascotas.idMascotas} idDueno={mascotas.idDueno} nombre={mascotas.nombre} tipo={mascotas.tipo} fechaIngreso={mascotas.fechaIngreso} />
                    ))}


                    </tbody>
                </table>

            </div>
        </React.Fragment>
    )
}
export default Listar_Mascotas;