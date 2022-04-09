package ramosfonbon.northwind.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ramosfonbon.northwind.model.medicamentos;

import java.util.List;

@Repository
public interface medicamentosRepository extends CrudRepository<medicamentos, Long> {
    List<medicamentos> findAll();

    medicamentos findByidMedicamento(int idMedicamento );
    medicamentos save(medicamentos medicamentos);

    @Override
    void delete(medicamentos medicamentos);
}
