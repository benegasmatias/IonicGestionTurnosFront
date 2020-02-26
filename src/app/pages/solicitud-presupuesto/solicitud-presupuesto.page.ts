import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormControl } from '@angular/forms';

import {ModalPersonaFormPage} from '../../modal/modal-persona-form/modal-persona-form.page';
import {ModalVehiclePage} from '../../modal/modal-vehicle/modal-vehicle.page';
import {ModalTurnosDisponiblesPage} from '../../modal/modal-turnos-disponibles/modal-turnos-disponibles.page';
//servicios
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { PersonaService } from 'src/app/services/persona.service';
//classs
import { Vehiculo } from 'src/app/class/vehiculo';
import {Persona} from '../../class/persona';

//componentes ionic
import { AlertController, LoadingController} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SectorService } from 'src/app/services/sector.service';












@Component({
  selector: 'app-solicitud-presupuesto',
  templateUrl: './solicitud-presupuesto.page.html',
  styleUrls: ['./solicitud-presupuesto.page.scss'],
})
export class SolicitudPresupuestoPage implements OnInit  {


  

  persona:Persona=new Persona();
  
  vehiculos:Vehiculo[];
  sectores=[];

  verificaDNI=false;
  vehicles=false;

  isDisabled=false;

  form = new FormGroup({
     dni: new FormControl('',[Validators.required,Validators.min(1000000),Validators.max(60000000)])
 })

  constructor(private serviceVehiculo:VehiculoService,
    private servicePersona:PersonaService,
    public alertController: AlertController,
    private modalCtrl:ModalController,
    private serviceSector:SectorService,
    private loadingController: LoadingController
    ) { }

  ngOnInit() {
  }

  verificaDni(){
    this.presentLoading()
  
  this.servicePersona.getPersonForDni(this.form.get('dni').value).subscribe(
    (data:any)=>{
     
      //sirve para saber si esta o no el dni
        if(data){
          this.persona=data
          this.verificaDNI=true;
          this.buscarVehiculos(this.persona.id);
        }else{
          this.presentAlertConfirm()
        }
    })
  }
//busca los vehiculos por persona
 private buscarVehiculos(id){
 
    this.serviceVehiculo.buscaVehiculoPorPersona(id).subscribe(
      (data:any[])=>{
       
        if(data){
           //agrega un nueva restriccion
          this.form= new FormGroup({
            sector: new FormControl('',Validators.required),
            patente: new FormControl('',Validators.required)
          })
        this.getSectores();
        this.vehiculos=data;
        this.isDisabled=true;
        this.vehicles=true;     
          }else{
            this.vehiclesAlertConfirm()
          }
      }
    )
  }
  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'No se encuentra en el Sistema!',
      message: '¿Quiere registrarse en el <strong>Sistema</strong>?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            this.mostrarModal() 
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async vehiclesAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'No se encuentran vehiculos con este dni!',
      message: '¿Quiere agregar un vehiculo al <strong>Sistema</strong>?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            this.vehicleModal();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async mostrarModal() {
    
    const modal = await this.modalCtrl.create({
      component: ModalPersonaFormPage,
      componentProps: {
        'dni': this.form.get('dni').value
      }
    
    });
    return await modal.present();
}

async vehicleModal() {
  const modal = await this.modalCtrl.create({
    component: ModalVehiclePage,
    componentProps: {
      'id_person': this.persona.id
    }
  });
//devuelve Si guardo o no el vehiculo
  modal.onDidDismiss()
  .then((data) => {
    const recarga = data['data']; 
      if(recarga){
        this.buscarVehiculos(this.persona.id);
      }
});


  return await modal.present();
}

getSectores(){
  this.serviceSector.getSectores().subscribe(
    (data:any[])=>{
      this.sectores=data
      
    }
  )
}



async SolicitarPresupuestoModal() {
 
  const modal = await this.modalCtrl.create({
    component: ModalTurnosDisponiblesPage,
    componentProps: {
      'sector': this.form.get('sector').value,
      'id_car':this.form.get('patente').value
    }
  
  });


  return await modal.present();
}

async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Verificando..',
    duration: 2500
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
}


}
