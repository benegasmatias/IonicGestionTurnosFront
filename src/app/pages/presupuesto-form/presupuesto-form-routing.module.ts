import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresupuestoFormPage } from './presupuesto-form.page';

const routes: Routes = [
  {
    path: '',
    component: PresupuestoFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresupuestoFormPageRoutingModule {}
