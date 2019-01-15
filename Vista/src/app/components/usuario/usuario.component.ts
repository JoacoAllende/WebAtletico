import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  usuario : Usuario;

  constructor( private usuarioService : UsuarioService, private router : Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      res => console.log(res),
      err => console.error(err)
    )
  }

  iniciarSesion(){
    delete this.usuario.id_usuario;
    delete this.usuario.fullname;
    this.usuarioService.iniciarSesion(this.usuario).subscribe(
      res => {
        console.log(res);
        this.router.navigate(["/inicio"]);
      },
      err => {
        console.log("dentro de err");
        this.router.navigate(["/login"]);
        console.error(err);
      }
    )
  }

}
