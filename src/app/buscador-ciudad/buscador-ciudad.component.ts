import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FlightSearchService } from '../services/flight-search.service';
import { CiudadModel } from '../models/ciudades.model';
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
@Component({
  selector: 'app-buscador-ciudad',

  templateUrl: './buscador-ciudad.component.html',
  styleUrls: ['./buscador-ciudad.component.css']
})
export class BuscadorCiudadComponent {
  constructor(private flightSearchService: FlightSearchService) {}

  @Input() selectedItem: CiudadModel | undefined;
  @Output() selectedItemChange = new EventEmitter<CiudadModel>;
  items: any[] | undefined;

  suggestions = new BehaviorSubject<any[]>([]);

  
  updateSelected(){
    this.selectedItemChange.emit(this.selectedItem)
  }
  get sug() {
    return this.suggestions.value;
  }
  search(event: AutoCompleteCompleteEvent) {
    
    console.log(`${event.query}`);
    const a = this.flightSearchService.searchFlightByCity(event.query).subscribe((res: any) => {
      console.log(this.suggestions.value);
      console.log(res.results);
      this.suggestions.next(res.results.map((res: any) => res));
    });
    
  }
}
