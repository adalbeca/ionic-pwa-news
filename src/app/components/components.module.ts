import { NoticiaComponent } from './noticia/noticia.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias/noticias.component';



@NgModule({
  declarations: [ 
    NoticiasComponent,
    NoticiaComponent
   ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports:[
    NoticiasComponent,
  ]
})
export class ComponentsModule { }
