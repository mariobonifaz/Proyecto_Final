import React, {useEffect, useState} from "react";
import "../../assets/stylesheets/Listar_Mascotas.css";
import {Link} from "react-router-dom";
import Filas_Listar from "../../Componentes/tipoDeMascota/Filas_Listar_TiposDeMascotas";

function Listar_TiposDeMascotas(){
    const [listar, setListar] = useState([]);


    const obtenerDatos = async ()=>{
        const data = await fetch('http://localhost:18080/tipoMascota/list');
        const tipos = await data.json()
        setListar(tipos);
    }


    useEffect(() => {
        obtenerDatos()
    });
    return(
        <React.Fragment>
            <div className="Nav-COLOR">  <nav>
                <Link to="/TipoDeMascotas_Principal" className="Regreso_List btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Mostrar tipo de mascotas</h2>
            </nav></div>
            <p class="text-center fs-1">tipos Agregados Recientemente</p>
            <div className="Table">
                <table className="table table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">idTipo</th>
                        <th scope="col">nombre</th>
                        <th scope="col">caracteristicas</th>

                    </tr>
                    </thead>
                    <tbody>
                    {listar.map(tipos => (

                        <Filas_Listar idTipo={tipos.idTipo}  nombre={tipos.nombre} caracteristicas={tipos.caracteristicas} />
                    ))}

                    </tbody>
                </table>

            </div>
        </React.Fragment>
    )
}
export default Listar_TiposDeMascotas;