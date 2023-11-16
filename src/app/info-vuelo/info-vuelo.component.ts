import { Component, Input } from '@angular/core';
import { VueloModel } from '../models/vuelo.models';
import { VuelosService } from '../services/vuelos.service';
@Component({
  selector: 'app-info-vuelo',
  templateUrl: './info-vuelo.component.html',
  styleUrls: ['./info-vuelo.component.css']
})
export class InfoVueloComponent {
  @Input() vuelo!: VueloModel;

  origenTexto: string = '';
  origenPais: string = '';
  aeropuertoO: string = '';

  destinoTexto: string = '';
  destinoPais: string = '';
  aeropuertoD: string = '';

  precioVuelo: string = '';

  constructor(private servicevuelos: VuelosService ) {}
   
  ngOnInit() {
    // console.log(this.vuelo)
  }


}
