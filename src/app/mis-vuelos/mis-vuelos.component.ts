import { Component } from '@angular/core';


@Component({
  selector: 'app-mis-vuelos',
  templateUrl: './mis-vuelos.component.html',
  styleUrls: ['./mis-vuelos.component.css']
})
export class MisVuelosComponent {
  products!: any[];

  // constructor(private productService: any) {}

  ngOnInit() {
      // this.productService.getProducts().then((data) => (this.products = data.slice(0, 5)));
  }

  getSeverity (product: any) {
      switch (product.inventoryStatus) {
          case 'INSTOCK':
              return 'success';

          case 'LOWSTOCK':
              return 'warning';

          case 'OUTOFSTOCK':
              return 'danger';

          default:
              return null;
      }
  };
}
