import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupo } from '../models/grupo';
import { GlobalsService } from '../services/globals.service';

@Injectable({ 
  providedIn: 'root'
})
export class GruposService {

  grupos: Grupo[];
  API_URI;

  constructor(private http : HttpClient, private globalsService : GlobalsService) { 
    this.grupos = [];
    this.API_URI = globalsService.API_URI;
   }

  getGrupos(to, a) {
    return this.http.get(`http://${this.API_URI}/grupos/${to}/${a}`);
  }
}
