import { Component, Input } from '@angular/core';

import { ModalController, LoadingController } from '@ionic/angular';

import { Turno } from '../../class/turno'
//alerta 
import { AlertController } from '@ionic/angular';
import { TurnosService } from 'src/app/services/turnos.service';
import { Router } from '@angular/router';
import { Presupuesto } from 'src/app/class/presupuesto';







@Component({
  selector: 'app-modal-turnos-disponibles',
  templateUrl: './modal-turnos-disponibles.page.html',
  styleUrls: ['./modal-turnos-disponibles.page.scss'],
})



export class ModalTurnosDisponiblesPage {
  //arreglos de turnos disponibles
  turnos: any[];
  presupuesto: Presupuesto = new Presupuesto()



  @Input() sector

  @Input() id_car
  @Input() turno
  @Input() codigo


  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private serviceTurnos: TurnosService,
    private loadingController: LoadingController,
    private route: Router) { }



  ngOnInit() {
    this.presentLoading();
    if (this.turno) {

      this.getTurnosDisp();

    } else {

      this.getPresupuestoDisPorSector(this.sector);

    }
  }

  getTurnosDisp() {
    this.serviceTurnos.getTurnos(this.sector).subscribe(
      (data: any[]) => {

        this.turnos = data;
      }
    )
  }



  //trae de la api los presupuesto que estan disponibles pero filtrados por sector
  getPresupuestoDisPorSector(sector_id) {
    this.serviceTurnos.getTurnosDisPorPresuSector(sector_id).subscribe(
      (data: any[]) => {
        this.turnos = data
      }
    )
  }
  dismiss() {
    // using the injected ModalController this page

    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss();


  }

  async presentAlertConfirm(turno: Turno) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar Turno!',
      message: 'Seguro quiere solicitar el <strong>Turno</strong>!!!',
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
            //cuando se acepta y se puede recerbar el turno

            if (this.turno) {

              this.serviceTurnos.addTurno({ fecha: turno.dateTime, budget_cod: this.codigo }).subscribe(
                () => {
                  this.turno.disponible = "no";
                  this.turno.entrega = "si";
                }
              )
              // edita el turno. Lo entrega y ya no es disponible. una vez pasa esto no se puede volver a usar esa fecha y la hora

              this.serviceTurnos.editTurno(turno, turno.id).subscribe(
                () => { })


              this.turnoEntregadoAlert(turno);
              this.route.navigate(['/inicio']);
              this.dismiss();
            } else {


              this.presupuesto.car = this.id_car;
              this.presupuesto.sector = this.sector;
              this.presupuesto.budget = turno.id;
              this.presupuesto.dateTime = turno.dateTime;

              turno.sector_id = this.sector


              this.serviceTurnos.editTurnPresDisponibleOff(turno.id, turno).subscribe(
                () => { }
              )
              this.serviceTurnos.addPresupuesto(this.presupuesto).subscribe(
                () => { }
              )
              this.turnoEntregadoAlert(turno);
              this.route.navigate(['/inicio']);
            }

          }
        }
      ]
    });

    await alert.present();
  }

  async turnoEntregadoAlert(turno:Turno) {
    const alert = await this.alertCtrl.create({
      header: 'Exito!',
      subHeader: 'Turno Solicitado!',
      message: `Debera asistir con el vehiculo el dia ${turno.dateTime} `,
      buttons: ['OK']
    });



    await alert.present();
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando Turnos',
      duration: 1500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }


}
