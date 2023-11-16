import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CiudadModel } from '../models/ciudades.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userSignUpDto } from '../models/user-sign-up.dto';
import { BuscarVueloDto } from '../models/buscar-vuelo.model';
import { BusquedaVuelo } from '../validators/busqueda-vuelo.validator';
import { VuelosService } from '../services/vuelos.service';
import { VueloModel } from '../models/vuelo.models';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-panelfo',

  templateUrl: './panelfo.component.html',
  styleUrls: ['./panelfo.component.css']
})
export class PanelfoComponent {
  vuelos = new BehaviorSubject<VueloModel[]>([]);
  origen:CiudadModel |undefined;
  destino : CiudadModel | undefined;
  SoloIda: boolean = true;
  IdaYVuelta: boolean = false;
  cargando: boolean = false;
  constructor(private vuelosService: VuelosService){}
  maxAdults = 9
  maxChildren = 8
  maxInfants = 8

  intercambiar(){
    console.log(this.origen)
    console.log(this.destino)
    const borigen = this.origen
    this.origen=this.destino
    this.destino=borigen
  }
  seleccionarSoloIda() {
    this.SoloIda = true;
    this.IdaYVuelta = false;
    this.VuelosForm.controls.fechaidavuelta.reset()
  }

  seleccionarIdaYVuelta() {
    this.SoloIda = false;
    this.IdaYVuelta = true;
    this.VuelosForm.controls.fechaida.reset()
  }
  


  VuelosForm = new FormGroup({
    fechaida: new FormControl(''),
    fechaidavuelta: new FormControl(''),
    adultos: new FormControl('',[
      Validators.required,
      Validators.min(1),
    ]),
    niños: new FormControl('',[
      Validators.required      
    ]),
    bebes: new FormControl('',[
      Validators.required      
    ])
  },{
   validators:[BusquedaVuelo()]
  });

  get FechaIda(){
    return this.VuelosForm.controls.fechaida;
  }
  get FechaidayVuelta(){
    return this.VuelosForm.controls.fechaidavuelta;
  }
  get Adultos(){
    return this.VuelosForm.controls.adultos;
  }
  get Niños(){
    return this.VuelosForm.controls.niños;
  }
  
  get Bebes(){
    return this.VuelosForm.controls.bebes;
  }

onSubmit(){
  
  // if (this.VuelosForm.invalid){
  //   this.VuelosForm.markAllAsTouched();
  //   return;
  // }
  this.cargando = true;

  const formData = this.VuelosForm.value;
  var fechaida = new Date(formData.fechaida!)
  const fechaidavuelta  = formData.fechaidavuelta!;
  var fechaVuelta = null
  if (this.IdaYVuelta){
    fechaida = new Date(fechaidavuelta[0])
    const fechavuelta = new Date(fechaidavuelta[1])
    fechaVuelta =`${fechavuelta.getFullYear()}-${fechavuelta.getMonth()+1}-${fechavuelta.getDate()}` 
  }
  var fechaIda = `${fechaida.getFullYear()}-${fechaida.getMonth()+1}-${fechaida.getDate()}`
  const Adultos = formData.adultos!;
  const Niños = formData.niños!;
  const Bebes = formData.bebes!;
  console.log(this.origen)
  console.log(this.destino)
  const dto = new BuscarVueloDto({
    originLocationCode: this.origen?.column_1,
    destinationLocationCode: this.destino?.column_1,
    departureDate: fechaIda,
    returnDate: fechaVuelta,
    adults: Number(Adultos) ,
    children: Number(Niños),
    infants: Number(Bebes),
  })
  if (!fechaVuelta) delete dto.returnDate
  console.log("Enviando peticion")
  this.vuelosService.buscarVuelos(dto).subscribe((res:any)=>{
    this.vuelos.next(res.data)
    this.cargando = false
  })
}


}
