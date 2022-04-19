package ramosfonbon.northwind.model;

import javax.persistence.*;

@Entity
@Table(name = "mascotas")
public class mascotas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idMascotas")
    private int idMascotas;

    @Column(name = "idDueno")
    private int idDueno;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "tipo")
    private String tipo;

    @Column(name = "fechaIngreso")
    private String fechaIngreso;

    public mascotas() {
    }

    public mascotas(int idMascotas, int idDueno, String nombre, String tipo,String fechaIngreso) {
        this.idMascotas = idMascotas;
        this.idDueno = idDueno;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaIngreso = fechaIngreso;
    }

    public int getIdMascotas() {return idMascotas;}
    public void setIdMascotas(int idMascotas) {
        this.idMascotas = idMascotas;
    }

    public int getIdDueno() {
        return idDueno;
    }
    public void setIdDueno(int idDueno) {
        this.idDueno = idDueno;
    }

    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTipo() {
        return tipo;
    }
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getFechaIngreso(){
        return fechaIngreso;
    }
    public void setFechaIngreso(String fechaIngreso){
        this.fechaIngreso = fechaIngreso;
    }


}