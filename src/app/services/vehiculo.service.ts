import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../class/vehiculo';
@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  API_URI="/apiturno/";
  API="https://api-turnos.herokuapp.com";
  constructor(private http: HttpClient) { }


  buscaVehiculoPorPersona(id_person){
 // return this.http.get(`${this.API_URI}/Vehicles/viewVehicleForPerson/${id_person}.json`);
 return this.http.get(`${this.API}/vehiculos/viewForPersona/${id_person}`);
  }



  verificaPatente(patente){
    return this.http.get(`${this.API_URI}/vehicles/viewVehicleForpatent/${patente}.json`);
  }

  addvehiculo(vehiculo:Vehiculo){
  
   console.log(JSON.stringify(vehiculo));
    return this.http.post(`${this.API}/vehiculos/add/`,{
      "id_car":0,
      "patent":vehiculo.patent,
      "marca":vehiculo.marca,
      "modelo":vehiculo.modelo,
      "person_id":vehiculo.person_id,
      "anio":vehiculo.anio
    });
  }
}
