import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';
import { GruposService } from './services/grupos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private globalService : GlobalService){}

  private cambiarRuta(ruta){
    this.globalService.ruta = ruta;
  }

  title = 'Vista';
}
