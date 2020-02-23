import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  items= [1,2,3,4,5];
  constructor(private http: RouterModule) { }

  ngOnInit() {
  }
  
  


}
