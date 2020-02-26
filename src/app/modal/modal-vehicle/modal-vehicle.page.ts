import { Component, OnInit, Input, Output } from '@angular/core';
import { Vehiculo } from 'src/app/class/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-vehicle',
  templateUrl: './modal-vehicle.page.html',
  styleUrls: ['./modal-vehicle.page.scss'],
})
export class ModalVehiclePage implements OnInit {
  vehiculo:Vehiculo= new Vehiculo()
  form= new FormGroup({
    marca: new FormControl('',[Validators.required,Validators.minLength(4)]),
    modelo: new FormControl('',[Validators.required,Validators.minLength(6)]),
    patente: new FormControl('',[Validators.required,Validators.minLength(6)]),
    anio: new FormControl('',[Validators.required,Validators.min(50),Validators.max(2020)])
  })

  constructor(private serviceVehiculo:VehiculoService,private modalCtrl:ModalController) { }
  @Input() id_person;
  guardado
  ngOnInit() {
  this.guardado=false
  }

  

  addVehiculo(){
    this.vehiculo.person_id=this.id_person
    this.vehiculo.patent=this.borraEspacio(this.vehiculo.patent)
    this.serviceVehiculo.addvehiculo(this.vehiculo).subscribe(
      (data)=>{
          console.log(data)
          this.guardado=true
          this.dismiss()
      }
    )
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss(this.guardado);
  
  }

  borraEspacio(value: string): string {
    var re = / /gi; 
    var newstr = value.replace(re, ''); 
    return newstr;
  }

}
