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

  getInstancias(to, a){
    return this.http.get(`http://clubatleticoayacucho.com:3002/copaOro/${to}/${a}`);
  }
}
