package ramosfonbon.northwind.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ramosfonbon.northwind.model.dueno;
import ramosfonbon.northwind.repository.duenoRepository;

import java.util.List;

@RestController
public class duenoController {

    @Autowired
    duenoRepository duenoRepository;

    //List
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/dueno/list")
    List<dueno> getDuenoList(){
        return duenoRepository.findAll();
    }

    //Agre
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/dueno/add")
    dueno addDueno(@RequestBody dueno dueno){
        return duenoRepository.save(dueno);
    }

    //Elim
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping (value = "/dueno/{idDueno}")
    Boolean deldueno(@PathVariable ("idDueno") int idDueno){
        dueno Dueno = duenoRepository.findByIdDueno(idDueno);
        if (Dueno != null){
            duenoRepository.delete(Dueno);
            return true;
        }else {
            return false;
        }
    }

    //Mod
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping (value = "/dueno/update")
    dueno modDueno(@RequestBody dueno Dueno){
        dueno d = duenoRepository.findByIdDueno(Dueno.getIdDueno());
        if (d != null){
            d.setNombre(Dueno.getNombre());
            d.setCelular(Dueno.getCelular());
            d.setDireccion(Dueno.getDireccion());
            duenoRepository.save(d);
            return d;
        }else {
            return null;
        }
    }
}