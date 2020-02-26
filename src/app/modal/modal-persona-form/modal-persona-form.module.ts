import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPersonaFormPageRoutingModule } from './modal-persona-form-routing.module';

import { ModalPersonaFormPage } from './modal-persona-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPersonaFormPageRoutingModule
  ],
  declarations: [ModalPersonaFormPage]
})
export class ModalPersonaFormPageModule {}
