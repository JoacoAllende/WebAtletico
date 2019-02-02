import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { GlobalsService } from '../services/globals.service';

@Injectable({
  providedIn: 'root'
})
export class FormSignUpService {

  API_URI;


  constructor( private http : HttpClient, private globalsService : GlobalsService) {
    this.API_URI = globalsService.API_URI;
   }

  getForm (){
    return this.http.get(`http://${this.API_URI}/signup`);
  }

  enviarRegistro(usuario: Usuario){
    return this.http.post(`http://${this.API_URI}/signup`,usuario);
  }
}