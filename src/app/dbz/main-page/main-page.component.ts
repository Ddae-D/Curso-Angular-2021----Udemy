import { Component, OnInit } from '@angular/core';
import { Personajes } from '../interfaces/personajes.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  personaje:Personajes[] =[{
    nombre:"GOKU",
    poder:15000
  },
  {
    nombre:"Vegeta",
    poder:12000
  }
];

  nuevo:Personajes={
    nombre:"",
    poder:0
  }

  public agregar():void {
    if(this.nuevo.nombre.trim().length==0){//si es 0 la longitud sale del metodo (validaciones automaticas)
      return;
    }
    console.log(this.nuevo);
    this.personaje.push(this.nuevo);
    this.nuevo={//reset de propiedades
      nombre:"",
      poder:0
    }
    console.log(this.personaje);    
  }

  cambiaNombre(event:any){

    console.log(this.personaje);
  }
}
