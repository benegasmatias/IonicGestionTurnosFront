import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../class/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }
 

  API = "https://api-turnos.herokuapp.com";

  verificaDni(dni) {

   // return this.http.get(`${this.API_URI}/persons/viewPersonForDni/${dni}.json`);
  }

  getPersonaId(id) {
   // return this.http.get(`${this.API_URI}/persons/view/${id}.json`);
  }

  addPersona(persona: Persona) {
    return this.http.post(`${this.API}/personas/add/`,
      {
        "id": 0,
        "dni": persona.dni,
        "name": persona.name,
        "last_name": persona.last_name,
        "mail": persona.mail,
        "mobile": persona.mobile
      });
  }

  getPersonForDni(dni) {
    return this.http.get(`${this.API}/Personas/viewfordni/${dni}`);
  }

}
