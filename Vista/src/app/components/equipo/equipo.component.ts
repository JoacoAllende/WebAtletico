import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from 'src/app/models/equipo';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css'],
  providers: [EquipoService]
})
export class EquipoComponent implements OnInit {

  constructor(private equipoService : EquipoService) { }

  getEquipos(){
    this.equipoService.getEquipos()
      .subscribe(res => {
        this.equipoService.equipos = res as Equipo[];
        console.log(res);
      });
  }

  ngOnInit() {
    this.getEquipos();
  }

}
