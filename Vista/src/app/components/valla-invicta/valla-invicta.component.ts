import { Component, OnInit } from '@angular/core';
import { VallaInvictaService } from 'src/app/services/valla-invicta.service';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalsService } from 'src/app/services/globals.service';
import { Equipo } from 'src/app/models/equipo';

@Component({
  selector: 'app-valla-invicta',
  templateUrl: './valla-invicta.component.html',
  styleUrls: ['./valla-invicta.component.css']
})
export class VallaInvictaComponent implements OnInit {

  constructor(public vallaInvictaService : VallaInvictaService, private rutaActiva: ActivatedRoute, public globals :GlobalsService) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        let año = this.rutaActiva.snapshot.params.año;
        let torneo = this.rutaActiva.snapshot.params.torneo;
        this.getEquipos(torneo, año);
      }
    );
  }

  getEquipos(torneo, año){
    this.vallaInvictaService.getEquipos(torneo, año)
      .subscribe(res => {
        this.vallaInvictaService.equipos = res as Equipo[]; 
      })
  }

}
