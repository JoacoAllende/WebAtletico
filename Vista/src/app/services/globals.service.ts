import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class GlobalsService {
  
  activo : Boolean = false;
  
  //API_URI = 'localhost:4000';
  API_URI = '31.220.54.132:4000';

  constructor() { }
}