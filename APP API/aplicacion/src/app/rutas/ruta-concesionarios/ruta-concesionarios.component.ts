import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcesionarioJphInterface } from 'src/app/servicios/interface/concesionario-jph.interface';
import { ConcesionarioJphService } from 'src/app/servicios/http/concesionario-jph.service';

@Component({
  selector: 'app-ruta-concesionarios',
  templateUrl: './ruta-concesionarios.component.html',
  styleUrls: ['./ruta-concesionarios.component.scss']
})
export class RutaConcesionariosComponent implements OnInit {

  arreglo: ConcesionarioJphInterface[] = [];
  buscarConcesionario = '';

  constructor(
    private readonly concesionarioJphService: ConcesionarioJphService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const parametrosConsulta$ = this.activatedRoute.queryParams;

    parametrosConsulta$
      .subscribe(
        {
          next: (queryParams) => {
            this.buscarConcesionario = queryParams['nombreConcesionario'];
            this.buscarConcesionarios();
          },
          error: () => {

          },
          complete: () => {

          }
        }
      );

  }

  buscarConcesionarios() {
    this.concesionarioJphService
      .buscarTodos({
        nombreConcesionario: this.buscarConcesionario
      })
      .subscribe({
        next: (datos) => {
          this.arreglo = datos;
          this.buscarConcesionario = "";
          console.log({ datos });
        },
        error: (error) => {
          console.error({ error });
        }
      });
  }

  autosConcesionario(concesionario: string) {
    const ruta = ['autos/', concesionario];
    this.router.navigate(ruta);
  }

  gestionarConcesionario(concesionario: string) {
    const ruta = ['editar/concesionario', concesionario];
    this.router.navigate(ruta);
  }

}
