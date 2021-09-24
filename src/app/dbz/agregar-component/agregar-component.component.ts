import { Component, Input, OnInit } from '@angular/core';
import { Personajes } from '../interfaces/personajes.interface';

@Component({
  selector: 'app-agregar-component',
  templateUrl: './agregar-component.component.html',
})
export class AgregarComponentComponent {
@Input() nuevo:Personajes | any={
  nombre:'',
  poder:0
};
@Input() personaje:Personajes[] =[{
  nombre:"GOKU",
  poder:15000
},
{
  nombre:"Vegeta",
  poder:12000
}
];
@Input() agregar():void{
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
constructor(){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}
}


