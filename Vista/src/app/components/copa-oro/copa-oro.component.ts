import { Component, OnInit } from '@angular/core';
import { CopaOroService } from 'src/app/services/copa-oro.service';
import { Instancia } from 'src/app/models/instancia';

@Component({
  selector: 'app-copa-oro',
  templateUrl: './copa-oro.component.html',
  styleUrls: ['./copa-oro.component.css'],
  providers: [CopaOroService]
})
export class CopaOroComponent implements OnInit {

  constructor(private copaOroService : CopaOroService) { }

  ngOnInit() {
    this.getInstancias();
  }

  getInstancias(){
    this.copaOroService.getInstancias()
      .subscribe(res => {
        this.copaOroService.instancias = res as Instancia[];
        console.log(res);
      })
  }

}
