import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {

  flightSearchURL = environment.FLIGHTSEARCH_URL;
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
}
