import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudPresupuestoPageRoutingModule } from './solicitud-presupuesto-routing.module';
import {TurnosPageModule} from '../turnos/turnos.module'
import {ModalPersonaFormPage} from '../../modal/modal-persona-form/modal-persona-form.page';
import {ModalVehiclePage} from '../../modal/modal-vehicle/modal-vehicle.page'
import { SolicitudPresupuestoPage } from './solicitud-presupuesto.page';
import { ReactiveFormsModule } from '@angular/forms';

import {BorraEspaciosPipe} from '../../pipe/borra-espacios.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudPresupuestoPageRoutingModule,
    ReactiveFormsModule,
    TurnosPageModule
    
  ],
  declarations: [SolicitudPresupuestoPage,BorraEspaciosPipe,ModalPersonaFormPage,ModalVehiclePage],
  entryComponents: [ModalPersonaFormPage,ModalVehiclePage]
})
export class SolicitudPresupuestoPageModule {}
