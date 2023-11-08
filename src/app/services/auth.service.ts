import { Injectable } from '@angular/core';
import { userSignUpDto } from '../models/user-sign-up.dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserLoginDto } from '../models/user-login.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.LOGIN_URL!;
  signupURL = environment.SIGNUP_URL!;

  constructor(private http: HttpClient) { }
  login(dto: UserLoginDto): Observable<any> {
    return this.http.post<any>(this.authURL, dto);
  }

  register(dto: userSignUpDto): Observable<any> {
    return this.http.post<any>(this.signupURL, dto);
    
  }
}
