import { Component, OnInit } from '@angular/core';
import { CopaOroService } from 'src/app/services/copa-oro.service';
import { Instancia } from 'src/app/models/instancia';
import { ActivatedRoute, Params } from '@angular/router';
import { Partido } from 'src/app/models/partido';
import { NgForm } from '@angular/forms';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-copa-oro',
  templateUrl: './copa-oro.component.html',
  styleUrls: ['./copa-oro.component.css'],
  providers: [CopaOroService]
})
export class CopaOroComponent implements OnInit {

  constructor(public copaOroService : CopaOroService, private rutaActiva : ActivatedRoute, public globals :GlobalsService) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        let año = this.rutaActiva.snapshot.params.año;
        let torneo = this.rutaActiva.snapshot.params.torneo;
        this.getInstancias(torneo, año);
      }
    );
  }

  getInstancias(torneo, año){
    this.copaOroService.getInstancias(torneo, año)
      .subscribe(res => {
        this.copaOroService.instancias = res as Instancia[];
      })
  }

  editForm(partido: Partido) {
    this.copaOroService.selectedPartido = partido;
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.copaOroService.selectedPartido = new Partido();
    }
  }

  editPartido(torneo, año, form : NgForm){
    this.copaOroService.putPartido(torneo, año, form.value)
    .subscribe(res => {
      this.resetForm(form);
      this.getInstancias(torneo, año);
    })
  }

}
