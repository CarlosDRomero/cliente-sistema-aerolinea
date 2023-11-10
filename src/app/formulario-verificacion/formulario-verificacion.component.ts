import { Component, Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
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
  enviar(){
    if (this.formularioCodigo.invalid) return;

    const codigo = this.formularioCodigo.value.codigo!;
    this.authService.verificar(codigo).subscribe((res)=>{
      console.log(res)
    });
  }
}
