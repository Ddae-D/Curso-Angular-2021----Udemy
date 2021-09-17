import { Component } from "@angular/core";

@Component({//decorador
    selector:"app-acumulador",
    styleUrls:['./acumulador.component.css'],
    templateUrl:'acumulador.component.html'
})

export class AcumuladorComponent{
    title:string = 'Acumulador App, only a function';
    num:number = 10;
    base:number=5;
  
    acumular(valor:number){
      this.num+=valor;
    }
}