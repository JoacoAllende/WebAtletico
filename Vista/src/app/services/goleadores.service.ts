import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goleador } from '../models/goleador';

@Injectable({
  providedIn: 'root'
})
export class GoleadoresService {

  goleadores : Goleador[];
  selectedGoleador : Goleador;

  constructor(private http : HttpClient) {
    this.goleadores = [];
    this.selectedGoleador = new Goleador;
   }

   postGoleador(to, a, goleador: Goleador){
    return this.http.post(`http://localhost:3000/goleadores/${to}/${a}`,goleador);
   }

   putGoleador(to, a, goleador: Goleador){
    return this.http.put(`http://localhost:3000/goleadores/${to}/${a}` + `/${goleador.id}`,goleador);
   }

   getGoleadores(to, a){
    return this.http.get(`http://localhost:3000/goleadores/${to}/${a}`);
   }
}
