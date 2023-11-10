import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserLoginDto } from '../models/user-login.model';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {
  constructor(private authSrice: AuthService){}
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
    
    const resp = this.authSrice.login(dto).subscribe((res)=>{
      console.log(res)
    });

    console.log(resp)
  }
}
