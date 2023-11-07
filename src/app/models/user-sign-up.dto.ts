export class userSignUpDto{
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  
  constructor(name: string, email: string, password: string, passwordConfirm: string){
    this.name = name;
    this.email = email;
    this.password = password;
    this.passwordConfirm = passwordConfirm
  }

}