import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioVerificacionComponent } from './formulario-verificacion/formulario-verificacion.component';
import {MisVuelosComponent} from './mis-vuelos/mis-vuelos.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';

import { AppComponent } from './app.component';



//que es pathmatch en las rutas de angular?
const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'/home',
  //   pathMatch:'full'
  // },
  // {
  //   path:'home',
  //   component:AppComponent
  // },
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
    component: FormularioVerificacionComponent
  },
  {
    path: 'misvuelos', component: MisVuelosComponent
  },
  {
    path: 'sugerencias', component: SugerenciasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
