import { Component, OnInit } from '@angular/core';
import { TorneosPasadosService } from 'src/app/services/torneos-pasados.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalsService } from 'src/app/services/globals.service';
import { Torneo } from 'src/app/models/torneo';

@Component({
  selector: 'app-torneos-pasados',
  templateUrl: './torneos-pasados.component.html',
  styleUrls: ['./torneos-pasados.component.css'],
  providers: [TorneosPasadosService]
})
export class TorneosPasadosComponent implements OnInit {

  constructor(private torneosPasadosService : TorneosPasadosService, private rutaActiva : ActivatedRoute, public globals : GlobalsService) { }

  ngOnInit() {
    this.getTorneosPasados();
  }

  getTorneosPasados(){
    this.torneosPasadosService.getTorneosPasados()
      .subscribe(res => {
        this.torneosPasadosService.torneos = res as Torneo[]; 
      })
  }

}
