import { Component, OnInit } from '@angular/core';
import { GoleadoresService } from '../../services/goleadores.service'
import { Goleador } from 'src/app/models/goleador';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-goleadores',
  templateUrl: './goleadores.component.html',
  styleUrls: ['./goleadores.component.css'],
  providers: [GoleadoresService]
})
export class GoleadoresComponent implements OnInit {

  constructor(public goleadoresService : GoleadoresService, private rutaActiva: ActivatedRoute, public globals :GlobalsService) { }

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

  addGoleador(torneo, año, form : NgForm){
    if (form.value.id == -1){
      this.goleadoresService.postGoleador(torneo, año, form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.getGoleadores(torneo, año);
      })
    }
    else {
      this.goleadoresService.putGoleador(torneo, año, form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.getGoleadores(torneo, año);
      })
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.goleadoresService.selectedGoleador = new Goleador();
    }
  }

  editGoleador(goleador: Goleador){
    this.goleadoresService.selectedGoleador = goleador;
  }

}
