package ramosfonbon.northwind.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ramosfonbon.northwind.model.dueno;

import java.util.List;

@Repository
public interface duenoRepository extends CrudRepository<dueno, Long> {
    List<dueno> findAll();

    dueno findByIdDueno(int idDueno);
    dueno save(dueno dueno);

    @Override
    void delete(dueno dueno);
}
