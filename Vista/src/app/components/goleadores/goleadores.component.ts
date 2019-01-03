import { Component, OnInit } from '@angular/core';
import { GoleadoresService } from '../../services/goleadores.service'
import { Goleador } from 'src/app/models/goleador';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-goleadores',
  templateUrl: './goleadores.component.html',
  styleUrls: ['./goleadores.component.css'],
  providers: [GoleadoresService]
})
export class GoleadoresComponent implements OnInit {

  constructor(private goleadoresService : GoleadoresService, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        let año = this.rutaActiva.snapshot.params.año;
        let torneo = this.rutaActiva.snapshot.params.torneo;
        this.getGoleadores(torneo, año);
      }
    );
  }

  getGoleadores(torneo, año){
    this.goleadoresService.getGoleadores(torneo, año)
      .subscribe(res => {
        this.goleadoresService.goleadores = res as Goleador[]; 
      })
  }

}
