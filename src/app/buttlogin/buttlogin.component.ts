import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttlogin',
  templateUrl: './buttlogin.component.html',
  styleUrls: ['./buttlogin.component.css']
})
export class ButtloginComponent {
constructor(private router: Router){
}
  redirection(){
    this.router.navigate(["/signup"])
  }
}
