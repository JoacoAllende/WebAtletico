import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../services/globals.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  

  API_URI;

  constructor( private http : HttpClient, private globalsService : GlobalsService) {
    this.API_URI = globalsService.API_URI;
   }


  getUsuarios () {
    
    return this.http.get(`http://${this.API_URI}/login`);
  
  }
   
  iniciarSesion (usuario:Usuario) {
    return this.http.post(`http://${this.API_URI}/login`, usuario);
  }

  logout (){
    return this.http.get(`http://${this.API_URI}/logout`);
  }
  
}
