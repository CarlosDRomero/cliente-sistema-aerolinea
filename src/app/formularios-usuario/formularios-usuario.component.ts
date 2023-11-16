import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-formularios-usuario',
  templateUrl: './formularios-usuario.component.html',
  styleUrls: ['./formularios-usuario.component.css']
})
export class FormulariosUsuarioComponent {
  activeItem: MenuItem | undefined;
  items: MenuItem[] | undefined;
  constructor(private router: Router){}
  ngOnInit() {
    this.items = [
        { label: 'Registrarse', icon: 'pi pi-fw', command: ()=>this.router.navigate(["forms/signup"]) },
        { label: 'Iniciar sesión', icon: 'pi pi-fw', command: ()=>this.router.navigate(["forms/login"])},


    ];

    this.activeItem = this.items[0];
  }
  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
}
}
