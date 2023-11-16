import { Component, Input } from '@angular/core';
import { VueloModel } from '../models/vuelo.models';
import { VuelosService } from '../services/vuelos.service';


@Component({
  selector: 'app-lista-vuelos',
  templateUrl: './lista-vuelos.component.html',
  styleUrls: ['./lista-vuelos.component.css']
})
export class ListaVuelosComponent {
  @Input() vuelos: VueloModel[] = [];
  first: number = 0;
  rows: number = 3; 

  constructor(private servicevuelos: VuelosService) {}

  

  onPageChange(event: any) {
    this.first = event.first;
  }
}

