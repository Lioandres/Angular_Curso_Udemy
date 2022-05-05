
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesComponent } from './heroes/heroe/heroe.components';
import { ListadoComponent } from './heroes/listado/listado.component';








@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent, 
    ListadoComponent

  ],
  imports: [
    BrowserModule, 
    ContadorModule,
    DbzModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
