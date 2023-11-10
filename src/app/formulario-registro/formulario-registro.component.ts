import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordConfirm } from '../validators/password-confirm.validator';
import { AuthService } from '../services/auth.service';
import { userSignUpDto } from '../models/user-sign-up.dto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent {
  constructor(private authSrice: AuthService, private router: Router){}
  registerForm = new FormGroup({
    name: new FormControl('',[
      Validators.required, 
      Validators.maxLength(50),
      Validators.pattern("^[^0-9]*$")
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.pattern("^(?:(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[0-9]))[a-zA-Z0-9]{6,}$")
    ]),
    passwordConfirm: new FormControl('',[
      Validators.required      
    ])
  },{
    validators:[PasswordConfirm()]
  });
  
  get name(){
    return this.registerForm.controls.name;
  }
  get email(){
    return this.registerForm.controls.email;
  }
  get password(){
    return this.registerForm.controls.password;
  }
  get passwordConfirm(){
    return this.registerForm.controls.passwordConfirm;
  }


  onSubmit(){
    if (this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }
    const formData = this.registerForm.value;
    

    const name = formData.name!;
    const email = formData.email!;
    const password = formData.password!;
    const dto: userSignUpDto = {
      name,
      email,
      password,
    }
    
    const resp = this.authSrice.register(dto).subscribe((res)=>{
      //redirigir a otro componente de angular pero con sus respectivos inputs?
      console.log(res)
      this.router.navigate(['/verification'])
    });

    console.log(resp)
  }
}
