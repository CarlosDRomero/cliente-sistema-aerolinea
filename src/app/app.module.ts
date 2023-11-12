// Importaciones base
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos complementarios
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Modulos de PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { SidebarModule } from 'primeng/sidebar';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';

// Componentes creados
import { FormularioVerificacionComponent } from './formulario-verificacion/formulario-verificacion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtloginComponent } from './buttlogin/buttlogin.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioRegistroComponent,
    FormularioLoginComponent,
    FormularioVerificacionComponent,
    NavbarComponent,
    ButtloginComponent,
    BarraBusquedaComponent,
    CarruselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    PasswordModule,
    ButtonModule,
    DividerModule,
    FormsModule,
    TabMenuModule,
    SidebarModule,
    ButtonModule,
    CarouselModule,
    TagModule,
    CardModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
