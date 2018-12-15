import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { HttpClient } from 'selenium-webdriver/http';
import { GruposComponent } from './components/grupos/grupos.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    GruposComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
