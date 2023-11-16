import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VuelosService } from '../services/vuelos.service';
import { CiudadModel } from '../models/ciudades.model';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
@Component({
  selector: 'app-buscador-ciudad',

  templateUrl: './buscador-ciudad.component.html',
  styleUrls: ['./buscador-ciudad.component.css']
})
export class BuscadorCiudadComponent{

  @Input() ciudadSeleccionada?: CiudadModel;
  @Output() ciudadSeleccionadaChange = new EventEmitter<CiudadModel>();
  public ciudades = new BehaviorSubject<CiudadModel[]>([]);
  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  ngOnInit(): void {}
  writeValue(obj: any): void {
    if (this.ciudadSeleccionada !== obj) {
      this.ciudadSeleccionada = obj;
      this.ciudadSeleccionadaChange.emit(this.ciudadSeleccionada);
    }
  }



  constructor(private flightSearchService: VuelosService) {}
  @Input() placeholder: string = '';

  suggestions = new BehaviorSubject<any[]>([]);
  
  updateSelected(){
    this.ciudadSeleccionadaChange.emit(this.ciudadSeleccionada)
  }
  get sug() {
    return this.suggestions.value;
  }
  search(event: AutoCompleteCompleteEvent) {
    
    console.log(`${event.query}`);
    const a = this.flightSearchService.searchFlightByCity(event.query).subscribe((res: any) => {
      console.log(res)
      console.log(this.suggestions.value);
      this.suggestions.next(res.map((res: any) => res));
    });
    
  }
}
