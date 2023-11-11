import { Component, Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-formulario-two-factoricacion',
  templateUrl: './formulario-verificacion.component.html',
  styleUrls: ['./formulario-verificacion.component.css']
})
export class FormularioVerificacionComponent {
  constructor(
    private authService: AuthService,
  ){}
  formularioCodigo = new FormGroup({
    codigo: new FormControl('',[
      Validators.required,
      Validators.pattern(/^\d{6}$/)
    ])
  })
  
  value: string | undefined ;

  get codigo(){
    return this.formularioCodigo.controls.codigo;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:');
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  enviar(){
    if (this.formularioCodigo.invalid) return;
    //how i save information in cookies with angular?
    const codigo = this.formularioCodigo.value.codigo!;
    //como manejo los errores de una peticion de HttpClient en angular sin que aparezcan por consola?
    this.authService.verificar(codigo)
    .pipe(
      catchError(this.handleError)
    )
    .subscribe((res)=>{
      console.log(res)
    });
  }
}
