import { Component, OnInit } from '@angular/core';
import { TarjetasService } from 'src/app/services/tarjetas.service';
import { GlobalsService } from 'src/app/services/globals.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  constructor(public tarjetasService : TarjetasService, private rutaActiva: ActivatedRoute, public globals : GlobalsService) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        let año = this.rutaActiva.snapshot.params.año;
        let torneo = this.rutaActiva.snapshot.params.torneo;
        this.getTarjetas(torneo, año);
      }
    );
  }

  getTarjetas(torneo, año){
    this.tarjetasService.getTarjetas(torneo, año)
      .subscribe(res => {
        this.tarjetasService.equipos = res as Equipo[]; 
      })
  }

}
