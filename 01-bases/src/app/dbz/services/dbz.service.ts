import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";
import { AgregarComponent } from '../agregar/agregar.component';

@Injectable()
export class DbzService{

    private _personajes:Personaje[]=[
    
        {nombre:"goku",
        poder:1000},
    
        {nombre:"vegeta",
        poder:400}
      ]

    get personajes():Personaje[] {
        return [...this._personajes]
    }

   
    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje)
    }

}