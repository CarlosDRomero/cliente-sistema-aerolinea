import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioVerificacionComponent } from './formulario-verificacion/formulario-verificacion.component';




const routes: Routes = [
  {
    path: 'login',
    component: FormularioLoginComponent
  },
  {
    path: 'signup',
    component: FormularioRegistroComponent
  },
  {
    path: 'verification/:useCase',
    component: FormularioVerificacionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
