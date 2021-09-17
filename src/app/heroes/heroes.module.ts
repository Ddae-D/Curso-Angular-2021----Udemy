import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroesComponent } from "./heroe/heroes.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({

    declarations: [
        HeroesComponent,//declarando nuestros componentes
        ListadoComponent
    ],
    exports: [
        ListadoComponent//exportando el componente
    ]
    ,imports:
    [
        CommonModule
    ]

})
export class HeroesModule{

}