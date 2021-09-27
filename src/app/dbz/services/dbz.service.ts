import { Injectable } from "@angular/core";
import { Personajes } from "../interfaces/personajes.interface";

@Injectable()//inyeccion de servicio
export class DBZService
{
    private _personajes:Personajes[] = 
    [{
        nombre:"GOKU",
        poder:15000
      },
      {
        nombre:"Vegeta",
        poder:12000
      }
    ];
    get personaje():Personajes[]{
      return [...this._personajes];  
    }
    constructor(){
      
    }
    agregaPersonaje(p:Personajes){
      this._personajes.push(p);

    }
}