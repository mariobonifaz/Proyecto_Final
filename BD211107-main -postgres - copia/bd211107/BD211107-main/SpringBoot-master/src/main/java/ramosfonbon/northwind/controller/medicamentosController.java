package ramosfonbon.northwind.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ramosfonbon.northwind.model.medicamentos;
import ramosfonbon.northwind.repository.medicamentosRepository;

import java.util.List;

@RestController
public class medicamentosController {

    @Autowired
    medicamentosRepository medicamentosRepository;

    //List
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/medicamentos/list")
    List<medicamentos> getMedicamentoList() { return medicamentosRepository.findAll(); }

    //Agre
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/medicamentos/add")
    medicamentos addMedicamento(@RequestBody medicamentos medicamentos) { return medicamentosRepository.save(medicamentos); }

    //Elim
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping (value = "/medicamentos/{idMedicamento}")
    Boolean delmedicamento(@PathVariable("idMedicamento") int idMedicamento){
        medicamentos Medicamentos =medicamentosRepository.findByidMedicamento(idMedicamento);
        if (Medicamentos != null){
            medicamentosRepository.delete(Medicamentos);
            return true;
        }else {
            return false;
        }
    }

    //Mod
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/medicamentos/update")
    medicamentos modMedicamento(@RequestBody medicamentos Medicamentos){
        medicamentos d=medicamentosRepository.findByidMedicamento(Medicamentos.getIdMedicamento());
        if (d !=null){
            d.setNombre(Medicamentos.getNombre());
            d.setSustancia(Medicamentos.getSustancia());
            medicamentosRepository.save(d);
            return d;
        }else {
            return null;
        }
    }
}
