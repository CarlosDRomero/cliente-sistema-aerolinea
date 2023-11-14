import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CiudadModel } from '../models/ciudades.model';
@Component({
  selector: 'app-panelfo',

  templateUrl: './panelfo.component.html',
  styleUrls: ['./panelfo.component.css']
})
export class PanelfoComponent {
  
  origen:CiudadModel |undefined;
  destino : CiudadModel | undefined;
  fecha: Date | null = null;
  fechasRango: Date[] = []; 
  SoloIda: boolean = true;
  IdaYVuelta: boolean = false;

  intercambiar(){
    const borigen = this.origen
    this.origen=this.destino
    this.destino=borigen
  }
  seleccionarSoloIda() {
    this.SoloIda = true;
    this.IdaYVuelta = false;
  }

  seleccionarIdaYVuelta() {
    this.SoloIda = false;
    this.IdaYVuelta = true;
  }
  
  getFechaActual(): Date {
    return new Date();
  }

  getFechaManana(): Date {
    const fechaActual = new Date();
    fechaActual.setDate(fechaActual.getDate() + 15);
    return fechaActual;
  }
  value2: number = 0;
}
