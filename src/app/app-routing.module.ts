import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { CotizacionComponent } from './Componentes/cotizacion/cotizacion.component';
import { NosotrosComponent } from './Componentes/nosotros/nosotros.component';
import { ProductosComponent } from './Componentes/productos/productos.component';
import { ProductoComponent } from './Componentes/producto/producto.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'cotizacion', component: CotizacionComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto', component: ProductoComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
