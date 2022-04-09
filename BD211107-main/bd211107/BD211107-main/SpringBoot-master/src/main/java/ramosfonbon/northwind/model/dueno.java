package ramosfonbon.northwind.model;

import javax.persistence.*;

@Entity
@Table(name = "dueno")
public class dueno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idDueno", nullable = false)
    private int idDueno;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "direccion")
    private String direccion;

    @Column(name = "celular")
    private String celular;

    public dueno() {
    }

    public dueno(int idDueno, String nombre, String direccion, String celular ) {
        this.idDueno = idDueno;
        this.nombre = nombre;
        this.direccion = direccion;
        this.celular = celular;
    }

    public int getIdDueno() {return idDueno;}
    public void setIdDueno(int idDueno) {this.idDueno = idDueno;}

    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCelular() {
        return celular;
    }
    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getDireccion() {
        return direccion;
    }
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
}
