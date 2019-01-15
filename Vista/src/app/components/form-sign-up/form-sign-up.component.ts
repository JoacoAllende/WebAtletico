import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Usuario } from 'src/app/models/usuario';
import { FormSignUpService } from '../../services/form-sign-up.service';



@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.css']
})
export class FormSignUpComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  usuario: Usuario;

  constructor(private formSignUpService: FormSignUpService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    this.formSignUpService.getForm().subscribe(
      res => console.log(res),
      err => console.error(err)
    )
  }

  enviarDatos(usuario: Usuario) {
    this.formSignUpService.enviarRegistro(this.usuario).subscribe(
      res => {
        console.log(res);
        //this.router.navigate(["/inicio"]);
      },
      err => console.error(err)

    )
  };


}
