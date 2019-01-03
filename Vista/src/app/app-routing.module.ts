import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GruposComponent } from './components/grupos/grupos.component';
import { GoleadoresComponent } from './components/goleadores/goleadores.component';
import { CopaOroComponent } from './components/copa-oro/copa-oro.component';
import { CopaPlataComponent } from './components/copa-plata/copa-plata.component';

const routes: Routes = [
  
  { path: 'inicio', component: GruposComponent },
  { path: 'grupos/:torneo/:año', component: GruposComponent },
  { path: 'copaOro/:torneo/:año', component: CopaOroComponent },
  { path: 'copaPlata/:torneo/:año', component: CopaPlataComponent },
  { path: 'goleadores/:torneo/:año', component: GoleadoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]   
})

export class AppRoutingModule { }
