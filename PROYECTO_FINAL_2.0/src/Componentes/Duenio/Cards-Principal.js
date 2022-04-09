import React from "react";
import Card from "../Duenio/Card";

import "../../assets/stylesheets/Card.css";



const cards = [
    {
        id:1,
        title: "Agregar",

        Link:"/Agregar_Duenio"
    },


    {
        id:2,
        title: "Listar",

        Link:"/Listar_Duenios"
    },
    {
        id:3,
        title: "Eliminar",

        Link: "/Eliminar_Duenio"
    },
    {
        id:4,
        title: "Modificar",

        Link: "/Modificar_Duenio"
    }
];
    function CardsPrincipal() {
        return (
            <div className="container   ">
                <div className="row " >
                    {cards.map(({ title, image, id,Link }) => (
                        <div className="col-md-3" key={id}>
                            <Card imageSource={image} title={title} Boton={title} Direccion={Link} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    export default CardsPrincipal;