import { Component, OnInit } from '@angular/core';
import { GruposService } from '../../services/grupos.service';
import { Grupo } from 'src/app/models/grupo';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalsService } from 'src/app/services/globals.service';
import { Partido } from 'src/app/models/partido';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
  providers: [GruposService]
})
export class GruposComponent implements OnInit {

  constructor(public gruposService : GruposService, private rutaActiva : ActivatedRoute, public globals :GlobalsService) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        let año = this.rutaActiva.snapshot.params.año;
        let torneo = this.rutaActiva.snapshot.params.torneo;
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
  
  editForm(partido: Partido) {
    this.gruposService.selectedPartido = partido;
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.gruposService.selectedPartido = new Partido();
    }
  }

  editPartido(torneo, año, form : NgForm){
    this.gruposService.putPartido(torneo, año, form.value)
    .subscribe(res => {
      this.resetForm(form);
      this.getGrupos(torneo, año);
    })
  }

}
