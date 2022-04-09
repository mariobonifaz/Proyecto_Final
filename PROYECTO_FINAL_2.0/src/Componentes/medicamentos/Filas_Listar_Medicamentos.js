import React from "react";



function Filas_Listar({ idMedicamento,nombre ,sustancia }) {
    return (

        <tr>
            <td scope="row">{idMedicamento}</td>
            <td> {nombre} </td>
            <td> {sustancia} </td>

        </tr>

    );
}



export default Filas_Listar;