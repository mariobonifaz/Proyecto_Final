package ramosfonbon.northwind.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ramosfonbon.northwind.model.mascotas;

import java.util.List;

@Repository
public interface mascotasRepository extends CrudRepository<mascotas, Long> {
    List<mascotas> findAll();

    mascotas findByidMascotas(int idMascotas );
    mascotas save(mascotas mascotas);

    @Override
    void delete(mascotas mascotas);
}
