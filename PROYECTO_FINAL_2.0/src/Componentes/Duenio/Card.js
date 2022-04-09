import React from "react";

import "../../assets/stylesheets/Card.css";
import {Link} from "react-router-dom";

function Card({ imageSource, title, Boton,Direccion }) {
    return (
        <div className="Card-Complete  ">
        <div className="card text-center   card-background">

            <div className="card-body card-text-color">
                <h4 className="card-title">{title}</h4>
                <div>
                    <Link to={Direccion} className="boton-color-card">{Boton}</Link>
                </div>

            </div>
        </div>
        </div>
    );
}



export default Card;
