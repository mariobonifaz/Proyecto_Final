package ramosfonbon.northwind.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ramosfonbon.northwind.model.tipoMascota;

import java.util.List;

@Repository
public interface tipoMascotaRepository extends CrudRepository<tipoMascota, Long> {
    List<tipoMascota> findAll();

    tipoMascota findByidTipo(int idTipo );
    tipoMascota save(tipoMascota tipoMascota);

    @Override
    void delete(tipoMascota tipoMascota);
}
