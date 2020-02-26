import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudPresupuestoPage } from './solicitud-presupuesto.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudPresupuestoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudPresupuestoPageRoutingModule {}
