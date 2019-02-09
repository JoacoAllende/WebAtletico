import { Component, OnInit } from '@angular/core';
import { CopaPlataService } from '../../services/copa-plata.service'
import { Instancia } from 'src/app/models/instancia';
import { ActivatedRoute, Params } from '@angular/router';
import { Partido } from 'src/app/models/partido';
import { NgForm } from '@angular/forms';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-copa-plata',
  templateUrl: './copa-plata.component.html',
  styleUrls: ['./copa-plata.component.css']
})
export class CopaPlataComponent implements OnInit {

  constructor(public copaPlataService : CopaPlataService, private rutaActiva : ActivatedRoute, public globals :GlobalsService) { }

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
    this.copaPlataService.getInstancias(torneo, año)
      .subscribe(res => {
        this.copaPlataService.instancias = res as Instancia[];
      })
  }

  editForm(partido: Partido) {
    this.copaPlataService.selectedPartido = partido;
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.copaPlataService.selectedPartido = new Partido();
    }
  }

  editPartido(torneo, año, form : NgForm){
    this.copaPlataService.putPartido(torneo, año, form.value)
    .subscribe(res => {
      this.resetForm(form);
      this.getInstancias(torneo, año);
    })
  }

}
