import { Component, OnInit } from '@angular/core';
import { Personajes } from '../interfaces/personajes.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  personajes:Personajes[]=[];

  nuevo:Personajes={
    nombre:"Maestro Roshi",
    poder:3000
  }
  constructor(private myService:DBZService)
  {
    this.personajes = this.myService.personaje;
  }
  
  agregarPersonaje(personaje:Personajes){
    // debugger;
    this.personajes.push(personaje);
    console.log(this.personajes)
  }
  
  // public agregar():void {
  //   if(this.nuevo.nombre.trim().length==0){//si es 0 la longitud sale del metodo (validaciones automaticas)
  //     return;
  //   }
  //   console.log(this.nuevo);
  //   this.personajes.push(this.nuevo);
  //   this.nuevo={//reset de propiedades
  //     nombre:"",
  //     poder:0
  //   }
  //   console.log(this.personajes);    
  // }

  // cambiaNombre(event:any){

  //   console.log(this.personajes);
  // }
}
