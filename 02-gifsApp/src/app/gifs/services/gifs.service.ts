import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gif.interface';


@Injectable({
  providedIn: 'root'   // permite que este servicio se utilice globalmente en cualquier modulo
})
export class GifsService {

  private APIkey:string='weqa6HY5uwjuLYZyAFk5x9mevNMNEDM7'

  private serviceURL:string='https://api.giphy.com/v1/gifs'


  private _historial:string[]=[]   // en un array de string que almacena las entradas del input (que son string). Este array se inicializa vacío. Es decir que en primera medida cuando cargamos la aplicacion estará vacio

  //TODO: Cambiar por el tipo correcto
  public resultado:Gif[]=[]   // almacena en un array de objetos gif, los resultados de los elementos del array de arriba

  get historial():string[]{
    return [...this._historial] // para usar la variable _historial en el HTML u otro lugar donde se importrte este servicio. Atencion que al usarlo, como es una propiedad se debera poner this.gifsService.historial sin () porque para propiedades no se pone el (). Otra nota es que usamos el operador spred [...this._hisotrial ] para cortar la dependencia y no mutar el array original
  }

  constructor(private http:HttpClient) { // aqui el constructor importa diagamos un servicio que esl el HtppClient ( importado arriba también con el impor {}...)

      this._historial=JSON.parse(localStorage.getItem('historial')!)  || []  // aqui usamos los que hacemos es llamar a la variable localStorage, para recargar el historial.Porque recordar que _historial se inicializa vació. Entonces si queremos cargar la informacion que estaba antes la guardamos en localStorage. es como una coockie y se puede acceder desde el inspector --> aplicaciones . Aqui historial el el nombre de la propiedad-llave que contienne lso datos
    // notar que como queremos igualar un string que nos da el método localStore.getItem() a una array de objetos, entonces debeboconvertir el string a objeto con el parseJSON: Json.parse(). Al reves de abajo con el setItem

  }
    
  

  agregarGifs(query:string){ // este query viene del campo input del html. En este caso del html del componente busqueda (que tiene un método buscar() , que a su vez llama a este método agregarGifs())

    query=query.trim().toLocaleLowerCase()  // para eliminar los espacions en blanco y convertirla en lower case . Recordar que en pantalla se mostrara correctamente escrita porque se usa en el HTML el pipe || titlecase
    if(!this._historial.includes(query)) {   // para que no se repita. Aqui se ejecuta si "no" incluye el ekemnteo por eso el signo !
    this._historial=this._historial.splice(0,9) // corta al historial en los primeros 10 elementos
    
    this._historial.unshift(query)
    console.log(this._historial)
    }

    localStorage.setItem('historial',JSON.stringify(this._historial))

    const params=new HttpParams()
      .set('api_key',this.APIkey)
      .set('limit','10')
      .set('q',query)
     
    
    
    // Aqui el localStorage almacena el item en la propiedad historial, pero como el valor debe ser string , entones convertimos el array de this._historial en string con JSON.stringify()
    this.http.get<SearchGifsResponse>(`${this.serviceURL}/search`,{params}) // Recordar poner el tipo que recibe get , que es la interface <SearchGifResponse> que se definio en interface mediante el sitio web https://quicktype.io/
    .subscribe((resp)=>{
      console.log(resp.data)
      this.resultado=resp.data
      
    })
   

  }
}
