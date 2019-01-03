import { Component } from '@angular/core';
import { GruposService } from './services/grupos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private gruposService : GruposService){}


  private getGrupos(to, a){
    this.gruposService.getGrupos(to, a);
  }

  title = 'Vista';
}
