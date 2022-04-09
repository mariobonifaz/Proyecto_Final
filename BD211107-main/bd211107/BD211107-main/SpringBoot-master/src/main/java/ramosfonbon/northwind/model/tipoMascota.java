package ramosfonbon.northwind.model;

import javax.persistence.*;

@Entity
@Table(name = "tipoMascota")
public class tipoMascota {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idTipo")
    private int idTipo;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "caracteristicas")
    private String caracteristicas;

    public tipoMascota() {
    }

    public tipoMascota(int idTipo, String nombre, String caracteristicas) {
        this.idTipo = idTipo;
        this.nombre = nombre;
        this.caracteristicas = caracteristicas;
    }

    public int getIdTipo() {return idTipo;}
    public void setIdTipo(int idTipo) {
        this.idTipo = idTipo;
    }

    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCaracteristicas(){return caracteristicas;}
    public void setCaracteristicas(String caracteristicas){
        this.caracteristicas = caracteristicas;
    }

}