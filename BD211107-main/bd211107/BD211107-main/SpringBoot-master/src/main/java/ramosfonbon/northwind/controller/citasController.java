package ramosfonbon.northwind.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ramosfonbon.northwind.model.citas;
import ramosfonbon.northwind.repository.citasRepository;

import java.util.List;

@RestController
public class citasController {

    @Autowired
    citasRepository citasRepository;

    //List
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/citas/list")
    List<citas> getCitasList(){
        return citasRepository.findAll();
    }

    //Agr
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/citas/add")
    citas addCitas(@RequestBody citas citas){
        return citasRepository.save(citas);
    }

    //Elim
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping (value = "/citas/{idCita}")
    Boolean delcita(@PathVariable ("idCita") int idCita){
        citas Citas =citasRepository.findByIdCita(idCita);
        if (Citas != null){
            citasRepository.delete(Citas);
            return true;
        }else {
            return false;
        }
    }

    //Mod
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/citas/update")
    citas modCita(@RequestBody citas Citas){
        citas d = citasRepository.findByIdCita(Citas.getIdCita());
        if (d != null){
            d.setFecha(Citas.getFecha());
            d.setHora(Citas.getHora());
            d.setServicio(Citas.getServicio());
            d.setIdMascota(Citas.getIdMascota());
            citasRepository.save(d);
            return d;
        }else {
            return null;
        }
    }
}
