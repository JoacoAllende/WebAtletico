import { Component, OnInit } from '@angular/core';
import { CopaPlataService } from '../../services/copa-plata.service'
import { Instancia } from 'src/app/models/instancia';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-copa-plata',
  templateUrl: './copa-plata.component.html',
  styleUrls: ['./copa-plata.component.css']
})
export class CopaPlataComponent implements OnInit {

  constructor(public copaPlataService : CopaPlataService, private rutaActiva : ActivatedRoute) { }

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

}
