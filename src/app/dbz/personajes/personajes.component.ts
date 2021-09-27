import { Component, Input, OnInit } from '@angular/core';
import { Personajes } from '../interfaces/personajes.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
// @Input() personaje:Personajes[]=[];
  
  constructor(private dbzService:DBZService) {    
  }
  
  get personaje():Personajes[]{
    return this.dbzService.personaje;
   }
}
