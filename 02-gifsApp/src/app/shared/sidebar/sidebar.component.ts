import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'
  ]
})
export class SidebarComponent {

  constructor(private gifsService:GifsService) { }

  get historial():string[] {
    return this.gifsService.historial
  }

  reBuscar(item:string){
    console.log(item)
    this.gifsService.agregarGifs(item)

  }
  



}
