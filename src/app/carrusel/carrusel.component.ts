import { Component } from '@angular/core';
interface Product{
  image: string;
  name: string;
  price: string;
  inventoryStatus: string;
}
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  products!: Product[] ;
  responsiveOptions: any[] | undefined;

  ngOnInit() {
  this.products=[
    {
        image: "assets/img/product1.jpg",
        name: "Producto 1",
        price: "$50",
        inventoryStatus: "INSTOCK"
    },
    {
      image: "assets/img/product2.jpg",
      name: "Producto 2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      price: "$30",
      inventoryStatus: "OUTSTOK"
    },
    {
        image: "assets/img/product3.jpg",
      name: "Producto 3",
      price: "$48",
      inventoryStatus: "INSTOCK"
    },
    {
        image: "assets/img/product1.jpg",
        name: "Producto 1",
        price: "$50",
        inventoryStatus: "INSTOCK"
    },
    {
      image: "assets/img/product2.jpg",
      name: "Producto 2",
      price: "$30",
      inventoryStatus: "OUTSTOK"
    },
    {
        image: "assets/img/product3.jpg",
      name: "Producto 3",
      price: "$48",
      inventoryStatus: "INSTOCK"
    },
  ]

     this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }

  getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warning';
          default:
              return 'danger';

      }
  }
}
