import { Component, OnInit } from '@angular/core';
import { CopaOroService } from 'src/app/services/copa-oro.service';
import { Instancia } from 'src/app/models/instancia';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-copa-oro',
  templateUrl: './copa-oro.component.html',
  styleUrls: ['./copa-oro.component.css'],
  providers: [CopaOroService]
})
export class CopaOroComponent implements OnInit {

  constructor(public copaOroService : CopaOroService, private rutaActiva : ActivatedRoute) { }

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

}
