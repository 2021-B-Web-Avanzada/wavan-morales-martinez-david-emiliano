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
    
    const parametrosRuta$ = this.activatedRoute.params;

    parametrosRuta$
      .subscribe(
        {
          next: (parametrosRuta) => {
            console.log(parametrosRuta);
            this.buscarConcesionario = parametrosRuta['nombreConcesionario']
            this.buscarConcesionarios();
          },
          error: () => {
          },
          complete: () => {
          }
        }
      );
      
  }

  agregarConcesionario(){
    const ruta = ['/crear' , 'concesionario' ];
    this.router.navigate(ruta);
  }

  mostrarAutos(nombreConcesionario:string){
    const ruta = ['autos/', nombreConcesionario];
    this.router.navigate(ruta);
  }

  buscarConcesionarios() {
    this.concesionarioJphService
      .buscarConcesionarios()
      .subscribe({
          next: (datos) => { // try then
            this.arreglo = datos;
            console.log({datos});
          },
          error: (error) => { // catch
            console.error({error});
          },
        }
      )
  }

  editarConcesionario(nombreConcesionario:string){
    const ruta = ['editar/concesionario', nombreConcesionario];
    this.router.navigate(ruta);
  }

  eliminarConcesionario(posicion:number, nombreConcesionario:string){
    var confirmacion=confirm("¿Está seguro de que desea eliminar el Concesionario: "+nombreConcesionario+'?')
    if (confirmacion==true){
      this.arreglo.splice(posicion, 1);
      const eliminar$ = this.concesionarioJphService.eliminarConcesionario(nombreConcesionario);
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

  /*
  actualizarParametrosDeConsulta() {
    this.router
      .navigate(
        ['/concesionarios', this.buscarConcesionario], 
      )
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
 */
}
