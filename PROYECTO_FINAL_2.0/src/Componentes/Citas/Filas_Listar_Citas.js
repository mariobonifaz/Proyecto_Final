import React from "react";


function Filas_Listar({ Fecha, idCita, servicio, Motivo}) {
    return (

        <tr>
            <td scope="row">{Fecha}</td>
            <td> {idCita} </td>
            <td> {servicio} </td>
            <td> {Motivo} </td>

        </tr>

    );
}



export default Filas_Listar;