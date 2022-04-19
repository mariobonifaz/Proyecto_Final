package ramosfonbon.northwind.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ramosfonbon.northwind.model.dueno;
import ramosfonbon.northwind.model.mascotas;
import ramosfonbon.northwind.repository.mascotasRepository;

import java.util.List;

@RestController
public class mascotasController {

    @Autowired
    mascotasRepository mascotasRepository;

    //List
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/mascotas/list")
    List<mascotas> getmascotasList(){
        return mascotasRepository.findAll();
    }

    //Agre
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/mascotas/add")
    mascotas addMascotas(@RequestBody mascotas mascotas){
        return mascotasRepository.save(mascotas);
    }

    //Elim
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping (value = "/mascotas/{idMascotas}")
    Boolean delmascota(@PathVariable ("idMascotas") int idMascotas){
        mascotas Mascotas = mascotasRepository.findByidMascotas(idMascotas);
        if (Mascotas != null){
            mascotasRepository.delete(Mascotas);
            return true;
        }else {
            return false;
        }
    }

    //Mod
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/mascotas/update")
    mascotas modMascotas(@RequestBody mascotas Mascotas){
        mascotas d = mascotasRepository.findByidMascotas(Mascotas.getIdDueno());
        if (d != null){
            d.setIdDueno(Mascotas.getIdDueno());
            d.setNombre(Mascotas.getNombre());
            d.setTipo(Mascotas.getTipo());
            d.setFechaIngreso(Mascotas.getFechaIngreso());
            mascotasRepository.save(d);
            return d;
        }else {
            return null;
        }
    }
}
