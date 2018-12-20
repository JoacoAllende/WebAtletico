import { Component, OnInit } from '@angular/core';
import { CopaPlataService } from '../../services/copa-plata.service'
import { Instancia } from 'src/app/models/instancia';

@Component({
  selector: 'app-copa-plata',
  templateUrl: './copa-plata.component.html',
  styleUrls: ['./copa-plata.component.css']
})
export class CopaPlataComponent implements OnInit {

  constructor(private copaPlataService : CopaPlataService) { }

  ngOnInit() {
    this.getInstancias();
  }

  getInstancias(){
    this.copaPlataService.getInstancias()
      .subscribe(res => {
        this.copaPlataService.instancias = res as Instancia[];
      })
  }

}
