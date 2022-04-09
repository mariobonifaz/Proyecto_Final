import React from "react";


function Filas_Listar_Mascota({ idMascotas, idDueno, nombre,tipo, fechaIngreso }) {
    return (

        <tr>
            <td scope="row">{idMascotas}</td>
            <td> {idDueno} </td>
            <td> {nombre} </td>
            <td> {tipo} </td>
            <td> {fechaIngreso} </td>
        </tr>

    );
}



export default Filas_Listar_Mascota;