import { Component } from "@angular/core";

@Component({
    selector:"app-listado",
    styleUrls:['./listado.component.css'],
    templateUrl:'listado.component.html'
})

export class ListadoComponent{
    title:string='Listado de heroes';
    heroes:string[]=['Hulk','Tor','Superman','Iron Man', 'Capitan America', 'Spiderman'];   
    contadorHeroe:number=1;
    heroesEliminados:string[]=[];
    dropHeroe:string ='';
    borrarHeroe(){
        this.dropHeroe=this.heroes.pop() || '';
        console.log(`Eliminando superHeroe.....\nHeroe eliminado->${this.dropHeroe}`);
        this.heroesEliminados.push(this.dropHeroe);
    }
    agragarHeroe(){
        if(this.contadorHeroe>1){
            console.log("Longitud de mi array",this.heroes.length);
            this.heroes.push(`Heroe agregado ${this.contadorHeroe}`);
            this.contadorHeroe+=1;
        }
        else{
            this.heroes.push(`Heroe agregado ${this.contadorHeroe}`);
            this.contadorHeroe+=1;
        }

    }
}