package ramosfonbon.northwind.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ramosfonbon.northwind.model.tipoMascota;
import ramosfonbon.northwind.repository.tipoMascotaRepository;

import java.util.List;

@RestController
public class tipoMascotaController {

    @Autowired
    tipoMascotaRepository tipoMascotaRepository;

    //List
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/tipoMascota/list")
    List<tipoMascota> getTipoMascotaList() { return tipoMascotaRepository.findAll(); }

    //Agre
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/tipoMascota/add")
    tipoMascota addTipoMascota(@RequestBody tipoMascota tipoMascota) { return tipoMascotaRepository.save(tipoMascota); }

    //Elim
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(value = "/tipoMascota/{idTipo}")
    Boolean deltipoMascota(@PathVariable ("idTipo") int idTipo){
        tipoMascota TipoMascota = tipoMascotaRepository.findByidTipo(idTipo);
        if (TipoMascota != null){
            tipoMascotaRepository.delete(TipoMascota);
            return true;
        }else {
            return false;
        }
    }

    //Mod
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/tipoMascota/update")
    tipoMascota modtipoMascotas(@RequestBody tipoMascota TipoMascota){
        tipoMascota d = tipoMascotaRepository.findByidTipo(TipoMascota.getIdTipo());
        if (d != null){
            d.setNombre(TipoMascota.getNombre());
            d.setCaracteristicas(TipoMascota.getCaracteristicas());
            tipoMascotaRepository.save(d);
            return d;
        }else {
            return null;
        }
    }
}
