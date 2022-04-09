import React from "react";



function Filas_Listar({ name, addres,celular,DuenioID }) {
    return (

        <tr>
            <td scope="row">{name}</td>
            <td> {addres} </td>
            <td> {celular} </td>
            <td> {DuenioID} </td>
        </tr>

    );
}



export default Filas_Listar;