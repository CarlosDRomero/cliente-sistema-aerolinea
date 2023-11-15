import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserLoginDto } from '../models/user-login.model';
import { Router } from '@angular/router';
import { VerifUseCase } from '../formulario-verificacion/formulario-verificacion.component';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  
  get email(){
    return this.registerForm.controls.email;
  }
  get password(){
    return this.registerForm.controls.password;
  }
  onSubmit(){
    const formData = this.registerForm.value;

    const email = formData.email!;
    const password = formData.password!;

    const dto: UserLoginDto = {
      email,
      password,
    }
    
    const resp = this.authService.login(dto).subscribe((res)=>{
      if (!res.access_token){
        this.router.navigate(["/verification",VerifUseCase.LOGIN])
        return;
      }
      console.log(res.access_token)
    });

    console.log(resp)
  }
}
