import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Instancia } from '../models/instancia';

@Injectable({
  providedIn: 'root'
})
export class CopaPlataService {

  instancias : Instancia[];

  constructor(private http : HttpClient) {
    this.instancias = [];
   }

   getInstancias(to, a){
    return this.http.get(`http://31.220.54.132:4000/copaPlata/${to}/${a}`);
   }
}
