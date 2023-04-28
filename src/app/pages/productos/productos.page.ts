import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  productos=[
    {
      title:'Deportivos',
      image:'../../../assets/images/deportivo1.jpg'
    },
    {
      title:'Manoslibre',
      image:'../../../assets/images/manoslibre.jpg'
    },
    {
      title:'Billeteras',
      image:'../../../assets/images/billetera.jpg'
    },
    {
      title:'Morrales',
      image:'../../../assets/images/morrales.jpg'
    }

  ];

  constructor() { }
  ngOnInit() {

  }

}
