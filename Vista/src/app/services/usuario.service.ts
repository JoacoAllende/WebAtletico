import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  message: String;


  API_URI = 'http://localhost:3000';

  constructor( private http : HttpClient) {
    
   }


  getUsuarios () {
    
    return this.http.get(`${this.API_URI}/login`);
  
  }
   
  iniciarSesion (usuario:Usuario) {
    return this.http.post(`${this.API_URI}/login`, usuario);
  }

  logout (){
    return this.http.get(`${this.API_URI}/logout`);
  }
  
}
