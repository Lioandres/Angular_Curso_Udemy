import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { BusquedaComponent } from './busqueda/busqueda.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    ResultadoComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsPageComponent
  ],
})
export class GifsModule { }
