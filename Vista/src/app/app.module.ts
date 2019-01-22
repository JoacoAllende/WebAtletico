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
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FormSignUpComponent } from './components/form-sign-up/form-sign-up.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    GruposComponent,
    CopaOroComponent,
    GoleadoresComponent,
    CopaPlataComponent,
    InicioComponent,
    UsuarioComponent,
    FormSignUpComponent,
    JugadoresComponent,
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
