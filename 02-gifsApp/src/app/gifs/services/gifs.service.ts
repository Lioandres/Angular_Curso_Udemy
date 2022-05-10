import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gif.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private APIkey:string='weqa6HY5uwjuLYZyAFk5x9mevNMNEDM7'

  private _historial:string[]=[]

  //TODO: Cambiar por el tipo correcto
  public resultado:Gif[]=[]

  get historial():string[]{
    return [...this._historial]
  }

  constructor(private http:HttpClient) {

      this._historial=JSON.parse(localStorage.getItem('historial')!)  || []
    

  }
    
  

  agregarGifs(query:string){

    query=query.trim().toLocaleLowerCase()
    if(!this._historial.includes(query)) {
    this._historial=this._historial.splice(0,9)
    
    this._historial.unshift(query)
    console.log(this._historial)
    }

    localStorage.setItem('historial',JSON.stringify(this._historial))

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=weqa6HY5uwjuLYZyAFk5x9mevNMNEDM7&q=${query}&limit=10`)
    .subscribe((resp)=>{
      console.log(resp.data)
      this.resultado=resp.data
      
    })
   

  }
}
