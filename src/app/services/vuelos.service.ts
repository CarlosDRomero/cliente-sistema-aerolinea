import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { VueloModel } from '../models/vuelo.models';
import { TipoVuelo } from '../models/vuelo.models';
import { lastValueFrom, map } from 'rxjs';
import { BuscarVueloDto } from '../models/buscar-vuelo.model';
@Injectable({
  providedIn: 'root'
})



export class VuelosService {

  flightSearchURL = environment.FLIGHTSEARCH_URL;
  flightOfferURL = environment.FLIGHTOFFER_URL;
  constructor(
    private http: HttpClient
  ) { }
  searchFlightByCity(city:string){
    return this.http.get(this.flightSearchURL,{
      params:{
        city
      }
    })
  }
  buscarVuelos(params: any){
    return this.http.get(this.flightOfferURL,{params})
  }
  async getMisVuelos(){
    return []
    // var lista_vuelos: VueloModel[];
    // lista_vuelos = await lastValueFrom(this.http.get(this.flightOfferURL,{
    //   params:{
    //     originLocationCode:'CDG',
    //     destinationLocationCode: 'BCN',
    //     departureDate:'2023-11-20',
    //     returnDate:'2023-11-22',
    //     adults:'1',
    //     children:'1',
    //     infants:'1',
    //     travelClass: 'BUSINESS',
    //     // travelClass:'FIRST',
    //    // maxPrice:10000000,

        
    //   }
    // }).pipe(map((res:any)=>{
    //   return res.data
    // })))
    // console.log(lista_vuelos)
    // return lista_vuelos
    // return [
    //   {
    //     origen: {
    //       city_name:'Bogota',
    //       country_code:'CO',
    //       airport_code: 'BOG',
    //       country_name:"Colombia",
    //     },
    //     destino:{
    //       city_name:'Medellin',
    //       country_code:'CO',
    //       airport_code: 'MEL',
    //       country_name:"Colombia"
    //     },
    //     duracion:'0H30M',
    //     moneda:'COP',
    //     precio:150000,
    //     tipo:TipoVuelo.ECONOMY

    //   },
    //   {
    //     origen: {
    //       city_name:'Cali',
    //       country_code:'CO',
    //       airport_code: 'CCJ',
    //       country_name:"Colombia",
    //       },
    //     destino:{
    //     city_name:'Barranquilla',
    //     country_code:'CO',
    //     airport_code: 'BAQ',
    //     country_name:"Colombia"
    //     },
    //     duracion:'0H45M',
    //     moneda:'COP',
    //     precio:200000,
    //     tipo:TipoVuelo.PREMIUM_ECONOMY
    //   },
    //   {
    //     origen: {
    //     city_name:'Villa María del Río Seco',
    //     country_code:'CO',
    //     airport_code: 'CTG',
    //     country_name:"Colombia",
    //     },
    //     destino:{
    //     city_name:'San Fernando del Valle de Catamarca',
    //     country_code:'CO',
    //     airport_code: 'VDU',
    //     country_name:"Colombia"
    //     },  
    //     duracion:'0H30M',
    //     moneda:'COP',
    //     precio:180000,
    //     tipo:TipoVuelo.BUSINESS
    //     }
    // ]
  }
}
