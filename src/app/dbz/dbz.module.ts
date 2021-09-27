import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponentComponent } from './agregar-component/agregar-component.component';
import { DBZService } from './services/dbz.service';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponentComponent
  ],
  exports: [MainPageComponent]
  ,
  imports: [
    CommonModule, FormsModule,
  ],
  providers: [DBZService]
})
export class DbzModule { }
