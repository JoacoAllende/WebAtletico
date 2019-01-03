import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goleador } from '../models/goleador';

@Injectable({
  providedIn: 'root'
})
export class GoleadoresService {

  goleadores : Goleador[];

  constructor(private http : HttpClient) {
    this.goleadores = [];
   }

   getGoleadores(to, a){
    return this.http.get(`http://localhost:3000/goleadores/${to}/${a}`);
   }
}
