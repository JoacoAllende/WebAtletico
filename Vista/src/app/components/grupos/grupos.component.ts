import { Component, OnInit } from '@angular/core';
import { GruposService } from '../../services/grupos.service';
import { Grupo } from 'src/app/models/grupo';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
  providers: [GruposService]
})
export class GruposComponent implements OnInit {

  constructor(private gruposService : GruposService) { }

  ngOnInit() {
    this.getGrupos();
  }

  getGrupos() {
    this.gruposService.getGrupos()
      .subscribe( res => {
        this.gruposService.grupos = res as Grupo[];
        console.log(res);
      });
  }

}
