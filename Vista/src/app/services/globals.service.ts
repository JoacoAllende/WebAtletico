import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class GlobalsService {
  activo : Boolean = false;

  constructor() { }
}