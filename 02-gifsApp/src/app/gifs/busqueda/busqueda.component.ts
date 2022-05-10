import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  constructor(private gifsServices:GifsService){}

  @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>


  buscar(){
    
    const valor=this.txtBuscar.nativeElement.value
    console.log(valor)
    
    if (valor.trim()==="") return;

    this.gifsServices.agregarGifs(valor)
    this.txtBuscar.nativeElement.value=""
  }

}
