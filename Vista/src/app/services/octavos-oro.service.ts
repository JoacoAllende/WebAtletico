import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Partido } from '../models/partido';

@Injectable({
  providedIn: 'root'
})
export class OctavosOroService {

  partidos : Partido[];

  constructor(private http : HttpClient) { }
}
