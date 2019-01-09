import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { HttpClient } from 'selenium-webdriver/http';
import { GruposComponent } from './components/grupos/grupos.component';
import { CopaOroComponent } from './components/copa-oro/copa-oro.component';
import { GoleadoresComponent } from './components/goleadores/goleadores.component';
import { CopaPlataComponent } from './components/copa-plata/copa-plata.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ActualizarGoleadoresComponent } from './components/actualizar-goleadores/actualizar-goleadores.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    GruposComponent,
    CopaOroComponent,
    GoleadoresComponent,
    CopaPlataComponent,
    InicioComponent,
    ActualizarGoleadoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
