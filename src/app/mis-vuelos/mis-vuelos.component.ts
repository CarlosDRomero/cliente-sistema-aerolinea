import { Component } from '@angular/core';
import { VueloModel } from '../models/vuelo.models';
import { VuelosService } from '../services/vuelos.service';
@Component({
  selector: 'app-mis-vuelos',
  templateUrl: './mis-vuelos.component.html',
  styleUrls: ['./mis-vuelos.component.css']
})
export class MisVuelosComponent {
//   products!: any[]  ;
  vuelos: VueloModel[] = [];

  constructor(private servicevuelos: VuelosService ) {}
   
  ngOnInit() {
    this.servicevuelos.getMisVuelos().then(
      (res) =>{
        this.vuelos = res;
        console.log(this.vuelos)
      }
    );
  }
}



  

