import { Component, Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { catchError, take, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

export enum VerifUseCase{
  SIGNUP,
  LOGIN
}
@Component({
  selector: 'app-formulario-two-factoricacion',
  templateUrl: './formulario-verificacion.component.html',
  styleUrls: ['./formulario-verificacion.component.css']
})
export class FormularioVerificacionComponent {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
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
    const codigo = this.formularioCodigo.value.codigo!;
    
    var useCase!: VerifUseCase;
    this.route.queryParams.pipe(take(1)).subscribe((params)=>{
      useCase = params['useCase']
    })
    this.authService.verificar(codigo, useCase)
    .pipe(
      catchError(this.handleError)
    )
    .subscribe((res)=>{
      console.log(res)
    });
  }
}
