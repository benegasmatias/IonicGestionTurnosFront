import { Component, OnInit, Input, } from '@angular/core';

import { Router } from '@angular/router';

import { Persona } from 'src/app/class/persona';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-persona-form',
  templateUrl: './modal-persona-form.page.html',
  styleUrls: ['./modal-persona-form.page.scss'],
})



export class ModalPersonaFormPage implements OnInit {

 
  persona= new Persona();

  @Input() dni



  form = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(4)]),
    dni: new FormControl('',[Validators.required, Validators.minLength(7)]),
    apellido: new FormControl('',[Validators.required, Validators.minLength(3)]),
    mobile: new FormControl('',[Validators.required, Validators.minLength(9)]),
    email: new FormControl('',[Validators.required, Validators.minLength(11)])

  });
  constructor(private modalCtrl :ModalController,private route: Router, private servicePersona:PersonaService,private serviceVehiculo:VehiculoService) { }

  ngOnInit() {
    this.persona.dni=this.dni
    this.form.get('dni').setValue(this.dni);
  }

  guardar(){
    this.persona.name=this.form.get('nombre').value
    this.persona.last_name=this.form.get('apellido').value
    this.persona.mobile=this.form.get('mobile').value
    this.persona.mail=this.form.get('email').value
    this.servicePersona.addPersona(this.persona).subscribe(
      (data)=>{
        this.persona=data['person']
        this.route.navigate(['/inicio']);
       this.dismiss();
      }
    )
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }


}
