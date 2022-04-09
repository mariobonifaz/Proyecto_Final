package ramosfonbon.northwind.model;

import javax.persistence.*;

@Entity
@Table(name = "medicamentos")
public class medicamentos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idMedicamento")
    private int idMedicamento;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "sustancia")
    private String sustancia;

    public medicamentos() {
    }

    public medicamentos(int idMedicamento, String nombre, String sustancia) {
        this.idMedicamento = idMedicamento;
        this.nombre = nombre;
        this.sustancia = sustancia;
    }

    public int getIdMedicamento() {return idMedicamento;}
    public void setIdMedicamento(int idMedicamento) {
        this.idMedicamento = idMedicamento;
    }

    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getSustancia(){return sustancia;}
    public void setSustancia(String sustancia){
        this.sustancia = sustancia;
    }

}