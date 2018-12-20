import { Component, OnInit } from '@angular/core';
import { GoleadoresService } from '../../services/goleadores.service'
import { Goleador } from 'src/app/models/goleador';

@Component({
  selector: 'app-goleadores',
  templateUrl: './goleadores.component.html',
  styleUrls: ['./goleadores.component.css'],
  providers: [GoleadoresService]
})
export class GoleadoresComponent implements OnInit {

  constructor(private goleadoresService : GoleadoresService) { }

  ngOnInit() {
    this.getGoleadores();
  }

  getGoleadores(){
    this.goleadoresService.getGoleadores()
      .subscribe(res => {
        this.goleadoresService.goleadores = res as Goleador[]; 
      })
  }

}
