import { Component, OnInit } from '@angular/core';
//services
import { TurnosService } from 'src/app/services/turnos.service';
//ionic
import { AlertController, ModalController, LoadingController } from '@ionic/angular';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ModalTurnosDisponiblesPage} from '../../modal/modal-turnos-disponibles/modal-turnos-disponibles.page';

  


@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.page.html',
  styleUrls: ['./turnos.page.scss'],
})
export class TurnosPage implements OnInit {
 
  isDisabled=false

  presupuesto

  codigo='';
  verificado=false
  sector_id='';

  form = new FormGroup({
    codigo: new FormControl('',Validators.required)
 })

  constructor(private serviceTurnos:TurnosService,
    private alertController:AlertController,
    private modalCtrl:ModalController,
    private loadingController: LoadingController) { }

  ngOnInit() {
  }

//verifica codigo del presupuesto
  verificaCodigo(){
    this.presentLoading();
    this.serviceTurnos.verificaCodigo(this.codigo).subscribe(
      (data:any)=>{
     
        if(data){
            this.isDisabled=true
              this.sector_id=data.sector
              this.verificaSiFueEntregado()
              
          }else this.presentAlertConfirm();
      }
    )
  }

  verificaSiFueEntregado(){
    this.serviceTurnos.verificaSiSeEntrego(this.codigo).subscribe(
        (data:any)=>{
            if(data){
              this.verificado=true
            }else{
              this.codigoEntregado()
            }
        }
    )
  }



 



  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'El codigo no existe!',
      message: '¿Debe solicitar un turno de presupuesto?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
          
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async turnosDisponibles() {
    const modal = await this.modalCtrl.create({
      component: ModalTurnosDisponiblesPage,
      componentProps: {
        'sector':this.sector_id,
        'turno': true,
        'codigo':this.codigo
      }
    });

 
    return await modal.present();
  }

  async codigoEntregado() {
    const alert = await this.alertController.create({
      header: 'El codigo ya tiene turno asignado!',
      message: 'Comuniquese con el administrador para mas informacion.'
    });

    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Verificando..',
      duration: 2000
    });
    await loading.present();
  
    const { role, data } = await loading.onDidDismiss();
  }






  }


