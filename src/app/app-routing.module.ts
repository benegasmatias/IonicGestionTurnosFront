import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'turnos',
    loadChildren: () => import('./pages/turnos/turnos.module').then( m => m.TurnosPageModule)
  },
  {
    path: 'modal-turnos-disponibles',
    loadChildren: () => import('./modal/modal-turnos-disponibles/modal-turnos-disponibles.module').then( m => m.ModalTurnosDisponiblesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'presupuesto',
    loadChildren: () => import('./pages/presupuesto-form/presupuesto-form.module').then( m => m.PresupuestoFormPageModule)
  },
  {
    path: 'solicitud-presupuesto',
    loadChildren: () => import('./pages/solicitud-presupuesto/solicitud-presupuesto.module').then( m => m.SolicitudPresupuestoPageModule)
  },
  {
    path: 'modal-persona-form',
    loadChildren: () => import('./modal/modal-persona-form/modal-persona-form.module').then( m => m.ModalPersonaFormPageModule)
  },
  {
    path: 'modal-vehicle',
    loadChildren: () => import('./modal/modal-vehicle/modal-vehicle.module').then( m => m.ModalVehiclePageModule)
  },
{
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
