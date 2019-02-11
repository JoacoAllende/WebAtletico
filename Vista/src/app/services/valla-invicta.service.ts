import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../services/globals.service';
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class VallaInvictaService {

  equipos : Equipo[];
  API_URI;

  constructor(private http : HttpClient, private globalsService : GlobalsService) {
    this.equipos = [];
    this.API_URI = globalsService.API_URI;
   }

   getEquipos(to, a){
    return this.http.get(`http://${this.API_URI}/vallaInvicta/${to}/${a}`);
   }
}
