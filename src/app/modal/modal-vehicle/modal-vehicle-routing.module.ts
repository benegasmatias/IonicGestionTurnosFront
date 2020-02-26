import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVehiclePage } from './modal-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVehiclePageRoutingModule {}
