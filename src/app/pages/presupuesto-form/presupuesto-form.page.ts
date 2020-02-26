import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/class/persona';
import { Vehiculo } from 'src/app/class/vehiculo';

//servicios

import {PersonaService} from '../../services/persona.service'


@Component({
  selector: 'app-presupuesto-form',
  templateUrl: './presupuesto-form.page.html',
  styleUrls: ['./presupuesto-form.page.scss'],
})
export class PresupuestoFormPage implements OnInit {

  persona:Persona = new Persona()
  vehiculo:Vehiculo = new Vehiculo()

  constructor(private ServicePersona:PersonaService) { }

  ngOnInit() {
  }

  verificaDni(){
   /* this.ServicePersona.verificaDni(this.persona.dni).subscribe(
      (data)=>{console.log(data)}
    )*/


  }


}
