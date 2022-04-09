import React, {useEffect, useState} from "react";
import "../../assets/stylesheets/Listar_Mascotas.css";
import {Link} from "react-router-dom";
import Filas_Listar from "../../Componentes/medicamentos/Filas_Listar_Medicamentos";

function Listar_Medicamentos(){
    const [listar, setListar] = useState([]);


    const obtenerDatos = async ()=>{
        const data = await fetch('http://localhost:18080/medicamentos/list');
        const medi = await data.json()
        setListar(medi);
    }


    useEffect(() => {
        obtenerDatos()
    });
    return(
        <React.Fragment>
            <div className="Nav-COLOR">  <nav>
                <Link to="/Medicamentos_Principal" className="Regreso_List btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Mostrar medicamentos</h2>
            </nav></div>
            <p class="text-center fs-1">Medicamentos Agregados Recientemente</p>
            <div className="Table">
                <table className="table table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">idMedicamento</th>
                        <th scope="col">nombre</th>
                        <th scope="col">sustancia</th>

                    </tr>
                    </thead>
                    <tbody>
                    {listar.map(medi => (

                        <Filas_Listar idMedicamento={medi.idMedicamento} nombre={medi.nombre} sustancia={medi.sustancia} />
                    ))}

                    </tbody>
                </table>

            </div>
        </React.Fragment>
    )
}
export default Listar_Medicamentos;