
import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.components.html'

})

export class HeroesComponent{

    nombre:string="iroman"
    edad:number=30

    get nombreCapitalizado(){
         return this.nombre.toUpperCase()
    }

    obtenerNombre():string{
        return` ${this.nombre} -${this.edad}`
    }

    cambiarNombre():void{
        this.nombre="Spiderman"

    }

    cambiarEdad():void{
        this.edad=40
    }



}