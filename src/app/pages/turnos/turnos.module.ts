import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurnosPageRoutingModule } from './turnos-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import {ModalTurnosDisponiblesPage} from '../../modal/modal-turnos-disponibles/modal-turnos-disponibles.page'



import { TurnosPage } from './turnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurnosPageRoutingModule,
    ReactiveFormsModule
    
  ],
  declarations: [TurnosPage,ModalTurnosDisponiblesPage],
  entryComponents:[ModalTurnosDisponiblesPage],
  exports:[ModalTurnosDisponiblesPage]
 
})
export class TurnosPageModule {}
