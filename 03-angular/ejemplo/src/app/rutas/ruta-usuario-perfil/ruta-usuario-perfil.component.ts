import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserJphService } from 'src/app/servicios/http/user-jph.service';
import { UserJphInterface } from 'src/app/servicios/interface/user-jph.interface';

@Component({
  selector: 'app-ruta-usuario-perfil',
  templateUrl: './ruta-usuario-perfil.component.html',
  styleUrls: ['./ruta-usuario-perfil.component.scss']
})

export class RutaUsuarioPerfilComponent implements OnInit {

  idUsuario = 0;
  usuarioActual?:UserJphInterface;
  formGroup?: FormGroup;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly userJPHService: UserJphService,
    private readonly formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.formGroup = this.formBuilder
    .group(
      {
        email: new FormControl(
          {
            value: 'ejemplo@ejemplo.com',
            disabled: true
          },
          [])
      }
    );



    const parametrosRuta$ = this.activatedRoute.params
    parametrosRuta$
      .subscribe({
        next: (parametrosRuta)=>{
          console.log(parametrosRuta);
          this.idUsuario = +parametrosRuta['idUsuario'];
          this.buscarUsuario(this.idUsuario);
        }
      })
  }

  buscarUsuario(id: number){
    const buscarUsuarioPorId$ = this.userJPHService.buscarUno(id);
    buscarUsuarioPorId$
    .subscribe(
      {
        next:(data) => {
          this.usuarioActual = data;
        },
        error: (error) => {
          console.error(error)
        }
      }
    )
  }
}
