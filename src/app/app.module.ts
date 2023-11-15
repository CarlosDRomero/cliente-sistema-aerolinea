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
import {CardModule} from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DataViewModule } from 'primeng/dataview';
import { InputNumberModule } from 'primeng/inputnumber';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';


// Componentes creados
import { FormularioVerificacionComponent } from './formulario-verificacion/formulario-verificacion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtloginComponent } from './buttlogin/buttlogin.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { CookieService } from 'ngx-cookie-service';
import { PanelfoComponent } from './panelfo/panelfo.component';
import { MisVuelosComponent } from './mis-vuelos/mis-vuelos.component';
import { BuscadorCiudadComponent } from './buscador-ciudad/buscador-ciudad.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { TabViewModule } from 'primeng/tabview';
import { InfoVueloComponent } from './info-vuelo/info-vuelo.component';

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
    PanelfoComponent,
    MisVuelosComponent,
    BuscadorCiudadComponent,
    SugerenciasComponent,
    InfoVueloComponent
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
    CarouselModule,
    TagModule,
    CardModule,
    CalendarModule,
    FieldsetModule,
    AutoCompleteModule,
    DataViewModule,
    InputNumberModule,
    TabViewModule,
    ImageModule,
    TableModule,
    PanelModule
  ],

  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
