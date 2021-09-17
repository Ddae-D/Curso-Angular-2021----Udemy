import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  title:string='Super Heroes';
  nombre:String='Superman';
  edad:number = 40;
  
  constructor() { 
   console.log("Me cargo de primero");
  }
  
  getInformation():string{
    return `Mi nombre es ${this.nombre} y tengo ${this.edad} years de edad`
  }

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  cambiarHeroe():void{
    this.nombre = "Iron Man";
  }
  cambiarEdad():void{
    this.edad = 18;
  }

  
}
