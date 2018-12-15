import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipoSeleccionado : Equipo;
  equipos : Equipo[];

  constructor(private http : HttpClient) { 
    this.equipoSeleccionado = new Equipo();
    this.equipos = [];
  }

  getEquipos(){
    return this.http.get('http://localhost:3000/equipos');
  }
}
