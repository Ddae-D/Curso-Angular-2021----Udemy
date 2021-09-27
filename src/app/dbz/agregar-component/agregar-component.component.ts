import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personajes } from '../interfaces/personajes.interface';

import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-component',
  templateUrl: './agregar-component.component.html',
})
export class AgregarComponentComponent {
  //componente hijo que emita un valor al padre
// @Output() oneEventInsertPersonaje:EventEmitter<Personajes> = new EventEmitter(); //creamos nuestro propio evento
//emitir evento <tipo de dato a enviar>
@Input() nuevo:Personajes={
  nombre:"",
  poder:0
};

constructor(private dbzservice:DBZService){
    // dbzservice.agregaPersonaje(this.nuevo);
}

agregar():void{
  if(this.nuevo.nombre.trim().length==0){//si es 0 la longitud sale del metodo (validaciones automaticas)
    return;}
    this.dbzservice.agregaPersonaje(this.nuevo);
 //this.oneEventInsertPersonaje.emit(this.nuevo); //emite el obj
  this.nuevo={//reset de propiedades
    nombre:"",
    poder:0
  }  
}


}


