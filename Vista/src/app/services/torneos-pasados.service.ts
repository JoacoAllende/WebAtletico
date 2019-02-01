import { Injectable } from '@angular/core';
import { Torneo } from '../models/torneo';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../services/globals.service';

@Injectable({
  providedIn: 'root'
})
export class TorneosPasadosService {

  torneos: Torneo[];
  API_URI;

  constructor(private http : HttpClient, private globalsService : GlobalsService) {
    this.torneos = [];
    this.API_URI = globalsService.API_URI;
   }

  getTorneosPasados() {
    return this.http.get(`http://${this.API_URI}/torneosPasados`);
  }
}
