import { query } from '@angular/animations';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserJphService } from 'src/app/servicios/http/user-jph.service';
import { UserJphInterface } from 'src/app/servicios/interface/user-jph.interface';

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})

export class RutaUsuarioComponent implements OnInit {

  arreglo: UserJphInterface[] = [];
  buscarUsuario = '';

  constructor(
    private readonly userJphService: UserJphService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const parametrosConsulta$ = this.activatedRoute
      .queryParams;

    parametrosConsulta$   
    .subscribe (
        {
        next:(queryParams) =>{
          console.log(queryParams);
          this.buscarUsuario =queryParams['name'];
          this.buscarUsuarios();
        },
        error:() =>{

        },
        complete: () =>{

        }
      }
    );
    
    /*
    this.router.navigate(['/app','usuario'], {queryParams:{
      name:'asdasd'
    }})
    this.buscarUsuarios();
    */
  }

  actualizarParametrosDeConsulta(){
    this.router
    .navigate(
      ['/app','usuario'], // Armamos la URL/app/usuario
      {
        queryParams: {
          name: this.buscarUsuario //?name=NombreBuscado
        }
      }
    )
  }

  buscarUsuarios() {
    this.userJphService
      .buscarTodos({
        name: this.buscarUsuario
      })

      .subscribe({
        next: (datos) => {
          this.arreglo = datos;
          this.buscarUsuario = '';
        },
        error: (error) => {
          console.log({ error });
        }
      }
      )
  }

  gestionarUsuario(idUsuario: number) {

  }

}
