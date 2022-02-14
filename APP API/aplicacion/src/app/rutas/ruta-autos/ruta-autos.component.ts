import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoJphService } from 'src/app/servicios/http/auto-jph.service';
import { AutoJphInterface } from 'src/app/servicios/interface/auto-jph.interface';

@Component({
  selector: 'app-ruta-autos',
  templateUrl: './ruta-autos.component.html',
  styleUrls: ['./ruta-autos.component.scss']
})
export class RutaAutosComponent implements OnInit {

  arreglo: AutoJphInterface[] = [];
  buscarAuto = '';

  constructor(
    private readonly autoJphService: AutoJphService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const parametrosConsulta$ = this.activatedRoute.queryParams;

    parametrosConsulta$
      .subscribe(
        {
          next: (queryParams) => {
            this.buscarAuto = queryParams['modelo'];
            this.buscarAutos();
          },
          error: () => {

          },
          complete: () => {

          }
        }
      );
  }

  buscarAutos() {
    this.autoJphService
      .buscarTodos({
        modelo: this.buscarAuto
      })
      .subscribe({
        next: (datos) => {
          this.arreglo = datos;
          this.buscarAuto = "";
          console.log({ datos });
        },
        error: (error) => {
          console.error({ error });
        }
      });
  }

  gestionarAuto(modelo: string) {
    const ruta = ['editar/auto', modelo];
    this.router.navigate(ruta);
  }

}
