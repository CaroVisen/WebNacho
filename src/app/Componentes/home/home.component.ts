import { Component, OnInit } from '@angular/core';
import { RouterModule } from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: RouterModule) { }

  ngOnInit() {
  }

  filtraProd1(){
    console.log("filtra productos tipo 1");
    
  }

  filtraProd2(){
    console.log("filtra productos tipo 2");

  }

  filtraProd3(){
    console.log("filtra productos tipo 3");

  }
}
