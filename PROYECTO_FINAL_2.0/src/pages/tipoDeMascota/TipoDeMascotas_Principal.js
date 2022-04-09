import React from "react";
import CardsPrincipal from "../../Componentes/tipoDeMascota/Cards-Principal";
import "../../assets/stylesheets/Mascotas_Principal.css"
import {Link} from "react-router-dom";

function TipoDeMascotas_Principal (){
    return(
        <div>
            <div className="Nav-Bar">  <nav>
                <Link to="/" className="Regreso_Add1" class="btn btn-outline-dark text-white" type="button" id="button-addon1">Inicio</Link>
                <h2 className="title">Tipos de mascotas</h2>
            </nav>


            </div>

            <CardsPrincipal/>
        </div>
    )
}

export default TipoDeMascotas_Principal;