

import Mascotas_Principal from "../pages/Mascotas/Mascotas_Principal";
import Agregar_Mascotas from "../pages/Mascotas/Agregar_Mascotas";
import Modificar_mascotas from "../pages/Mascotas/Modificar_mascotas";
import Listar_Mascotas from "../pages/Mascotas/Listar_Mascotas";
import { Routes, Route} from "react-router-dom";
import Eliminar_Mascota from "../pages/Mascotas/Eliminar_Mascota";
import Duenio_Principal from "../pages/Dueios/Duenio_Principal";
import Agregar_Duenio from "../pages/Dueios/Agregar_Duenios";
import Listar_Duenio from "../pages/Dueios/Listar_Duenios";
import Eliminar_Duenio from "../pages/Dueios/Eliminar_Duenio";
import Modificar_Duenio from "../pages/Dueios/Modificar_Duenio";
import Citas_Principal from "../pages/Citas/Citas_Principal";
import Listar_Citas from "../pages/Citas/Listar_Citas";
import Eliminar_Citas from "../pages/Citas/Eliminar_Citas";
import Modificar_Citas from "../pages/Citas/Modificar_Citas";
import Agregar_Citas from "../pages/Citas/Agregar_Citas";
import Principal from "../pages/principal";
import Agregar_Medicamentos from "../pages/medicamentos/Agregar_Medicamentos";
import Listar_Medicamentos from "../pages/medicamentos/Listar_Medicamentos";
import Eliminar_Medicamentos from "../pages/medicamentos/Eliminar_Medicamentos";
import Modificar_Medicamentos from "../pages/medicamentos/Modificar_Medicamentos";
import Medicamentos_Principal from "../pages/medicamentos/Medicamentos_Principal";
import Agregar_Tipos from "../pages/tipoDeMascota/Agregar_Tipos";
import Listar_TiposDeMascotas from "../pages/tipoDeMascota/Listar_TiposDeMascotas";
import Eliminar_TiposDeMascotas from "../pages/tipoDeMascota/EliminarTiposDeMascotas";
import Modificar_TiposDeMascotas from "../pages/tipoDeMascota/Modificar_TiposDeMascotas";
import TipoDeMascotas_Principal from "../pages/tipoDeMascota/TipoDeMascotas_Principal";

;

function App() {
  return (
    <div className="App">
        <Routes>
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/" element={<Principal/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Duenio_Principal" element={<Duenio_Principal/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Citas_Principal" element={<Citas_Principal/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Mascotas_Principal" element={<Mascotas_Principal/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Medicamentos_Principal" element={<Medicamentos_Principal/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/TipoDeMascotas_Principal" element={<TipoDeMascotas_Principal/>}/>}

            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Agregar_Mascotas" element={<Agregar_Mascotas/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Listar_Mascotas" element={<Listar_Mascotas/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Eliminar_Mascota" element={<Eliminar_Mascota/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Modificar_mascotas" element={<Modificar_mascotas/>}/>}

            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Agregar_Duenio" element={<Agregar_Duenio/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Listar_Duenios" element={<Listar_Duenio/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Eliminar_Duenio" element={<Eliminar_Duenio/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Modificar_Duenio" element={<Modificar_Duenio/>}/>}


            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Agregar_Citas" element={<Agregar_Citas/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Listar_Citas" element={<Listar_Citas/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Eliminar_Citas" element={<Eliminar_Citas/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Modificar_Citas" element={<Modificar_Citas/>}/>}

            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Agregar_Medicamentos" element={<Agregar_Medicamentos/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Listar_Medicamentos" element={<Listar_Medicamentos/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Eliminar_Medicamentos" element={<Eliminar_Medicamentos/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Modificar_Medicamentos" element={<Modificar_Medicamentos/>}/>}


            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Agregar_Tipos" element={<Agregar_Tipos/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Listar_TiposDeMascotas" element={<Listar_TiposDeMascotas/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Eliminar_TiposDeMascotas" element={<Eliminar_TiposDeMascotas/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Modificar_TiposDeMascotas" element={<Modificar_TiposDeMascotas/>}/>}


        </Routes>
      {/*<Mascotas_Principal/>*/}
      {/*<Agregar_Mascotas/>*/}
      {/*  <Modificar_mascotas/>*/}
      {/*  <Eliminar_Mascotas/>*/}
      {/*  <Listar_Mascotas/>*/}
    </div>
  );
}

export default App;
