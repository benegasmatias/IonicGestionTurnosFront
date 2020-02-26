import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPersonaFormPage } from './modal-persona-form.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPersonaFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPersonaFormPageRoutingModule {}
