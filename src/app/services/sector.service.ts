import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  API="https://api-turnos.herokuapp.com";
  constructor(private http: HttpClient) { }

  getSectores(){
    //return this.http.get(`${this.API_URI}/Sectors/index.json`);
    return this.http.get(`${this.API}/sectores`);
  }


}
