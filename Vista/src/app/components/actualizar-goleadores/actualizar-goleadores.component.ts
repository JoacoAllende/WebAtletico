import { Component, OnInit } from '@angular/core';
import { ActualizarGoleadoresService } from '../../services/actualizar-goleadores.service'
import { NgForm } from '@angular/forms';
import { Goleador } from 'src/app/models/goleador';

@Component({
  selector: 'app-actualizar-goleadores',
  templateUrl: './actualizar-goleadores.component.html',
  styleUrls: ['./actualizar-goleadores.component.css']
})
export class ActualizarGoleadoresComponent implements OnInit {

  constructor(private actualizarGoleadoresService : ActualizarGoleadoresService) { }

  ngOnInit() {
  }

  addGoleador(form : NgForm){
    this.actualizarGoleadoresService.postGoleador(form.value)
      .subscribe(res => {
        console.log(res);
      })
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.actualizarGoleadoresService.selectedGoleador = new Goleador();
    }
  }

}
