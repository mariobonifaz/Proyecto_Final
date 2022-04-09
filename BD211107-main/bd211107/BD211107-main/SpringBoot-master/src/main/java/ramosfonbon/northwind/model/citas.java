package ramosfonbon.northwind.model;

import javax.persistence.*;

@Entity
@Table(name = "citas")
public class citas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCita", nullable = false)
    private int idCita;

    @Column(name = "fecha")
    private String fecha;

    @Column(name = "hora")
    private String hora;

    @Column(name = "servicio")
    private String servicio;

    @Column(name = "idMascota")
    private int idMascota;

    public citas() {
    }

    public citas(int idCita, String fecha,String hora, String servicio, int idMascota) {
        this.idCita = idCita;
        this.fecha = fecha;
        this.hora = hora;
        this.servicio = servicio;
        this.idMascota=idMascota;
    }

    public int getIdCita() {return idCita;}
    public void setIdCita(int idCita) {this.idCita = idCita;}

    public String getFecha() {
        return fecha;
    }
    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getHora() {
        return hora;
    }
    public void setHora(String hora) {
        this.hora = hora;
    }

    public String getServicio() {
        return servicio;
    }
    public void setServicio(String servicio) {
        this.servicio = servicio;
    }

    public int getIdMascota() {return idMascota;}
    public void setIdMascota(int idMascota) {this.idMascota = idMascota;}
}
