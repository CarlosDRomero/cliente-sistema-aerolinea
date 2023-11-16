import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioVerificacionComponent } from './formulario-verificacion/formulario-verificacion.component';
import {MisVuelosComponent} from './mis-vuelos/mis-vuelos.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';

import { FormulariosUsuarioComponent } from './formularios-usuario/formularios-usuario.component';
import { PaginaInicioComponent } from './pages/pagina-inicio/pagina-inicio.component';



//que es pathmatch en las rutas de angular?
const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  // {
  //   path:'home',
  //   component:AppComponent
  // },
  {
    path: 'userforms',
    component: FormulariosUsuarioComponent,
  },
  {
    path: 'forms',
    component: FormulariosUsuarioComponent,
    children:[
      {
        path: 'signup',
        component: FormularioRegistroComponent
      },
      {
        path: 'login',
        component: FormularioLoginComponent
      },
    ]
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
  },
  {
    path: 'home', component: PaginaInicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
