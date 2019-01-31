import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Instancia } from '../models/instancia';
import { GlobalsService } from '../services/globals.service';

@Injectable({
  providedIn: 'root'
})
export class CopaOroService {

  instancias : Instancia[];
  API_URI;

  constructor(private http : HttpClient, private globalsService : GlobalsService) {
    this.instancias = [];
    this.API_URI = globalsService.API_URI;
   }

  getInstancias(to, a){
    return this.http.get(`http://${this.API_URI}/copaOro/${to}/${a}`);
  }
}
