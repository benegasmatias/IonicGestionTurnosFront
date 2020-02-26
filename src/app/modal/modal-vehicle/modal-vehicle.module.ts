import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVehiclePageRoutingModule } from './modal-vehicle-routing.module';

import { ModalVehiclePage } from './modal-vehicle.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVehiclePageRoutingModule
  ],
  declarations: [ModalVehiclePage]
})
export class ModalVehiclePageModule {}
