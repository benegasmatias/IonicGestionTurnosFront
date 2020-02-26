import { NgModule ,LOCALE_ID} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalTurnosDisponiblesPageRoutingModule } from './modal-turnos-disponibles-routing.module';

import { ModalTurnosDisponiblesPage } from './modal-turnos-disponibles.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalTurnosDisponiblesPageRoutingModule
  ],
  declarations: [ ],
  providers:[
    {provide: LOCALE_ID , useValue:"es"}
  ]
})
export class ModalTurnosDisponiblesPageModule {}
