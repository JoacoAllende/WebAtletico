import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GruposComponent } from './components/grupos/grupos.component';
import { GoleadoresComponent } from './components/goleadores/goleadores.component';

const routes: Routes = [
  
  { path: 'inicio', component: GruposComponent },
  { path: 'grupos/0/2018', component: GruposComponent },
  { path: 'goleadores', component: GoleadoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
