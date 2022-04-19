package ramosfonbon.northwind.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ramosfonbon.northwind.model.citas;

import java.util.List;

@Repository
public interface citasRepository extends CrudRepository<citas, Long> {
    List<citas> findAll();

    citas findByIdCita(int idCita);
    citas save(citas citas);

    @Override
    void delete(citas citas);
}
