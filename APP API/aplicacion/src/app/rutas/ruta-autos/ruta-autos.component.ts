import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutoJphService } from 'src/app/servicios/http/auto-jph.service';
import { AutoJphInterface } from 'src/app/servicios/interface/auto-jph.interface';
import { ConcesionarioJphInterface } from 'src/app/servicios/interface/concesionario-jph.interface';
import { environment } from 'src/environments/environment';

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
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const parametrosConsulta$ = this.activatedRoute.params;

    parametrosConsulta$
      .subscribe(
        {
          next: (params) => {
            this.buscarAuto = params['nombreConcesionario'];
            console.log(params)
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
      .buscarTodos(this.buscarAuto)
      .subscribe({
        next: (datos: ConcesionarioJphInterface) => {
          this.arreglo = datos.autos;
          console.log(datos);
        },
        error: (error) => {
          console.error({ error });
        }
      });
  }

  eliminarAuto(posicion:number, nombreConcesionario:string, modelo: string){
    var confirmacion=confirm("¿Está seguro de que desea eliminar el Auto: "+modelo+'?')
    if (confirmacion==true){
      this.arreglo.splice(posicion, 1);
      const eliminar$ = this.autoJphService.eliminarAuto(nombreConcesionario, modelo);
      eliminar$
        .subscribe({
          next: (datos) => {
            console.log({datos});

          },
          error: (error) => {
            console.error({error});
          }
        });
    }
  }



  gestionarAuto(modelo: string) {
    const ruta = ['editar/auto', modelo];
    this.router.navigate(ruta);
  }

}
