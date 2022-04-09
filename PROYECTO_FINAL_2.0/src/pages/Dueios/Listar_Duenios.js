import React, {useEffect, useState} from "react";
import "../../assets/stylesheets/Listar_Mascotas.css";
import {Link} from "react-router-dom";
import Filas_Listar from "../../Componentes/Duenio/Filas_Listar_Duenio";

function Listar_Duenio(){
    const [listar, setListar] = useState([]);


    const obtenerDatos = async ()=>{
        const data = await fetch('http://localhost:18080/dueno/list');
        const Dueno = await data.json()
        setListar(Dueno);
    }


    useEffect(() => {
        obtenerDatos()
    });
    return(
        <React.Fragment>
            <div className="Nav-COLOR">  <nav>
                <Link to="/Duenio_Principal" className="Regreso_List btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Mostrar</h2>
            </nav></div>
            <p class="text-center fs-1">Dueños Agregados Recientemente</p>
            <div className="Table">
                <table className="table table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">nombre</th>
                        <th scope="col">direccion</th>
                        <th scope="col">celular</th>
                        <th scope="col">IDdueño</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listar.map(Dueno => (

                        <Filas_Listar name={Dueno.nombre}  addres={Dueno.direccion} celular={Dueno.celular} DuenioID={Dueno.idDueno}/>
                    ))}

                    </tbody>
                </table>

            </div>
        </React.Fragment>
    )
}
export default Listar_Duenio;