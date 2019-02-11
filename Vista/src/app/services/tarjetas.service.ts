import { Injectable } from '@angular/core';
import { GlobalsService } from './globals.service';
import { Equipo } from '../models/equipo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  equipos : Equipo[];
  API_URI;

  constructor(private http : HttpClient, private globalsService : GlobalsService) {
    this.equipos = [];
    this.API_URI = globalsService.API_URI;
   }

   getTarjetas(to, a){
    return this.http.get(`http://${this.API_URI}/tarjetas/${to}/${a}`);
   }
}
