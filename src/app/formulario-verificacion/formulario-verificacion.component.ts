import { Component, Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-formulario-verificacion',
  templateUrl: './formulario-verificacion.component.html',
  styleUrls: ['./formulario-verificacion.component.css']
})
export class FormularioVerificacionComponent {
  
  @Input() email: string = '';
  constructor(private authService: AuthService){}
  formularioCodigo = new FormGroup({
    codigo: new FormControl('',[
      Validators.required,
      Validators.maxLength(6),
      Validators.minLength(6),
    ])
  })

  value: string | undefined ;

  get codigo(){
    return this.formularioCodigo.controls.codigo;
  }
  enviar(){
    if (this.formularioCodigo.invalid) return;

    const codigo = this.formularioCodigo.value.codigo!;
    console.log(`correo ${this.email}`)
    this.authService.verificar(this.email,codigo).subscribe((res)=>{
      console.log(res)
    });
  }
}
