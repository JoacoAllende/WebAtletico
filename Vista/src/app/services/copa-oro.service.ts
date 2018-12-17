import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Instancia } from '../models/instancia';

@Injectable({
  providedIn: 'root'
})
export class CopaOroService {

  instancias : Instancia[];

  constructor(private http : HttpClient) {
    this.instancias = [];
   }

  getInstancias(){
    return this.http.get('http://localhost:3000/copaOro');
  }
}
