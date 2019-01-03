import { Component, OnInit } from '@angular/core';
import { GruposService } from '../../services/grupos.service';
import { Grupo } from 'src/app/models/grupo';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
  providers: [GruposService]
})
export class GruposComponent implements OnInit {

  constructor(private gruposService : GruposService, private rutaActiva : ActivatedRoute) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        let año = this.rutaActiva.snapshot.params.año;
        let torneo = this.rutaActiva.snapshot.paramMap.get('torneo');
        this.getGrupos(torneo, año);
      }
    );
  }

  getGrupos(torneo, año) {
    this.gruposService.getGrupos(torneo,año)
      .subscribe( res => {
        this.gruposService.grupos = res as Grupo[];
      });
  }

}
