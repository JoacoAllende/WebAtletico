import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goleador } from '../models/goleador';
import { GlobalsService } from '../services/globals.service';

@Injectable({
  providedIn: 'root'
})
export class GoleadoresService {

  goleadores : Goleador[];
  selectedGoleador : Goleador;
  API_URI;

  constructor(private http : HttpClient, private globalsService : GlobalsService) {
    this.goleadores = [];
    this.selectedGoleador = new Goleador;
    this.API_URI = globalsService.API_URI;
   }

   postGoleador(to, a, goleador: Goleador){
    return this.http.post(`http://${this.API_URI}/goleadores/${to}/${a}`,goleador);
   }

   putGoleador(to, a, goleador: Goleador){
    return this.http.put(`http://${this.API_URI}/goleadores/${to}/${a}`,goleador);
   }

   getGoleadores(to, a){
    return this.http.get(`http://${this.API_URI}/goleadores/${to}/${a}`);
   }
}
