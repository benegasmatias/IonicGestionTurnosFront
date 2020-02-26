import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:any[]

  constructor(private http:HttpClient) { 

  }

  cargaProductos(){
    
  }
}
