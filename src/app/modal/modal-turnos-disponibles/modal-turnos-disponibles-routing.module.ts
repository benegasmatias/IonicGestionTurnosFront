import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalTurnosDisponiblesPage } from './modal-turnos-disponibles.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTurnosDisponiblesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalTurnosDisponiblesPageRoutingModule {}
