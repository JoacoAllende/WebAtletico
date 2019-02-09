import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupo } from '../models/grupo';
import { GlobalsService } from '../services/globals.service';
import { Partido } from '../models/partido';

@Injectable({ 
  providedIn: 'root'
})
export class GruposService {

  selectedPartido : Partido;
  grupos: Grupo[];
  API_URI;

  constructor(private http : HttpClient, private globalsService : GlobalsService) { 
    this.grupos = [];
    this.selectedPartido = new Partido;
    this.API_URI = globalsService.API_URI;
   }

  getGrupos(to, a) {
    return this.http.get(`http://${this.API_URI}/grupos/${to}/${a}`);
  }

  putPartido(to, a, partido: Partido){
    return this.http.put(`http://${this.API_URI}/grupos/${to}/${a}`,partido);
   }
}
