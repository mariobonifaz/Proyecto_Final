import React from "react";



function Filas_Listar({ idTipo, nombre,caracteristicas }) {
    return (

        <tr>
            <td scope="row">{idTipo}</td>
            <td> {nombre} </td>
            <td> {caracteristicas} </td>

        </tr>

    );
}



export default Filas_Listar;