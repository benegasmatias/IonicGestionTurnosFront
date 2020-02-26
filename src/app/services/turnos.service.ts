import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Turno } from '../class/turno';
import { Presupuesto } from '../class/presupuesto';


@Injectable({
  providedIn: 'root'
})
export class TurnosService {
  API = "https://api-turnos.herokuapp.com";

  constructor(private http: HttpClient) { }


 
  editTurnPresDisponibleOff(id,presupuesto:any) {

    return this.http.put(`${this.API}/presupuestoDisponible/edit/${id}`, {"author_id":presupuesto.author_id, "sector_id":presupuesto.sector_id,"dateTime":presupuesto.dateTime,"available":"no", "delivered":"si"} );
  }

 


  editTurno(turno: Turno, id) {

    return this.http.put(`${this.API}/turnos/edit/${id}`, {
      "dateTime": turno.dateTime,
      "sector_id": turno.sector_id,
      "disponible": turno.disponible,
      "entregado": turno.entregado
    })
  }


 
  getTurnosDisPorPresuSector(sector_id) {
    return this.http.get(`${this.API}/presupuestosDisponibles/${sector_id}`);
  }

  verificaCodigo(id) {
    return this.http.get(`${this.API}/presupuestoEntregado/verificar/${id}`);
  }
  verificaSiSeEntrego(cod) {
    return this.http.get(`${this.API}/turnosEntregado/verificar/${cod}`);
  }
  //agrega un presupuesto entregado
  addPresupuesto(presupuesto:Presupuesto) {
    return this.http.post(`${this.API}/presupuestoEntregado/add`,
    {"cod_budget":0,
    "sector":presupuesto.sector,
    "car":presupuesto.car, 
    "amount":" ", 
    "descripcion":" ", 
    "budget":presupuesto.budget,
    "dateTime":presupuesto.dateTime});
  }
  getTurnos(sector_id) {
    return this.http.get(`${this.API}/turnos/disponibles/${sector_id}`)
  }
  addTurno(turno) {
    return this.http.post(`${this.API}/turnosEntregado/add`, {
      "fecha": turno.fecha,
      "budget_cod": turno.budget_cod
    });
  }




}
