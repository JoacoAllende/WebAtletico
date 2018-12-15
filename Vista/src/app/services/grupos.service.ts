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

  getGrupos() {
    return this.http.get('http://localhost:3000/grupos');
  }
}
