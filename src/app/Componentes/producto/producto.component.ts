import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  imagen: string = '../../../assets/imagen1.jpg';
  constructor() { }

  ngOnInit() {
  }

  cambioImagen(id){
    switch(id){
      case 1: this.imagen = '../../../assets/imagen1.jpg';
      break;
      case 2: this.imagen = '../../../assets/imagen2.jpg';
      break;
      case 3: this.imagen = '../../../assets/imagen3.jpg';
      break;
      case 4: this.imagen = '../../../assets/imagen1.jpg';
      break;
      case 5: this.imagen = '../../../assets/imagen2.jpg';
      break;
    }
  }
}
