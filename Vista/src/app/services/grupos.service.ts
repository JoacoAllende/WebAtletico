import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupo } from '../models/grupo';

@Injectable({ 
  providedIn: 'root'
})
export class GruposService {

  grupos: Grupo[];

  constructor(private http : HttpClient) { 
    this.grupos = [];
   }

  getGrupos(to, a) {
    return this.http.get(`http://31.220.54.132:4000/grupos/${to}/${a}`);
  }
}
