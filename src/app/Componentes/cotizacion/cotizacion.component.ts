import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  tipoform: number;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  filtraProd1(){
    console.log("filtra productos tipo 1");
    this.tipoform = 1;
  }

  filtraProd2(){
    console.log("filtra productos tipo 2");
    this.tipoform = 2;
  }

  filtraProd3(){
    console.log("filtra productos tipo 3");
    this.tipoform = 3;
  }
}
