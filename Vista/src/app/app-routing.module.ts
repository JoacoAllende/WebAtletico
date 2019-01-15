import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GruposComponent } from './components/grupos/grupos.component';
import { GoleadoresComponent } from './components/goleadores/goleadores.component';
import { CopaOroComponent } from './components/copa-oro/copa-oro.component';
import { CopaPlataComponent } from './components/copa-plata/copa-plata.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ActualizarGoleadoresComponent } from './components/actualizar-goleadores/actualizar-goleadores.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FormSignUpComponent } from './components/form-sign-up/form-sign-up.component';

const routes: Routes = [
  
  { path: 'inicio', component: InicioComponent },
  { path: 'grupos/:torneo/:año', component: GruposComponent },
  { path: 'copaOro/:torneo/:año', component: CopaOroComponent },
  { path: 'copaPlata/:torneo/:año', component: CopaPlataComponent },
  { path: 'goleadores/:torneo/:año', component: GoleadoresComponent },
  { path: 'goleadores/actualizar', component: ActualizarGoleadoresComponent },
  { path: 'login', component: UsuarioComponent},
  { path: 'signup', component: FormSignUpComponent},
  { path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]   
})

export class AppRoutingModule { }
