import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoJphService } from 'src/app/servicios/http/auto-jph.service';
import { ConcesionarioJphService } from 'src/app/servicios/http/concesionario-jph.service';
import { AutoJphInterface } from 'src/app/servicios/interface/auto-jph.interface';
import { ConcesionarioJphInterface } from 'src/app/servicios/interface/concesionario-jph.interface';

@Component({
  selector: 'app-ruta-autos-editar',
  templateUrl: './ruta-autos-editar.component.html',
  styleUrls: ['./ruta-autos-editar.component.scss']
})
export class RutaAutosEditarComponent implements OnInit {

  formGroup?: FormGroup;
  auto?: AutoJphInterface
  concesionario?: ConcesionarioJphInterface
  buscarConcesionario = '';
  buscarCarro = '';
  arreglo: AutoJphInterface[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly autoJphService: AutoJphService,
    private readonly concesionarioJphService: ConcesionarioJphService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    const parametrosRuta$ = this.activatedRoute.params;

    parametrosRuta$
      .subscribe(
        {
          next: (parametrosRuta) => {
            console.log(parametrosRuta);
            this.buscarConcesionario = parametrosRuta['nombreConcesionario']
            this.buscarCarro = parametrosRuta['modelo']
            this.buscarConcesionarios(this.buscarCarro);
          },
          error: () => {
          },
          complete: () => {
          }
        }
      );
  }

  buscarConcesionarios(buscarCarro: string) {
    this.concesionarioJphService
      .buscarConcesionario(this.buscarConcesionario)
      .subscribe({
          next: (datos) => { // try then
            this.concesionario = datos;
            this.auto = this.concesionario.autos
            .filter(function(auto){
              return auto.modelo == buscarCarro
            })[0]
            this.prepararFormulario();
            console.log(this.auto);
          },
          error: (error) => { // catch
            console.error({error});
          },
        }
      )
  }

  private prepararFormulario() {
    this.formGroup = this.formBuilder.group({
      modelo: new FormControl({
        value: this.auto ? this.auto?.modelo : '',
        disabled: false
      },
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(30)
        ]),
      anio: new FormControl({
        value: this.auto ? this.auto?.anio : '',
        disabled: false
      },
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4)
        ]),
      nuevo: new FormControl({
        value: this.auto?.nuevo?"true":"false",      //Booleano
        disabled: false
      }),
      color: new FormControl({
        value: this.auto ? this.auto?.color : '',
        disabled: false
      },
        [
          Validators.required,
          Validators.maxLength(30)
        ]),
      precio: new FormControl({
        value: this.auto ? this.auto?.precio : '',
        disabled: false
      },
        [
          Validators.required,
        ])
    }
    );

    const cambio$ = this.formGroup.valueChanges;
    cambio$.subscribe(
      (data) => {
        if (this.formGroup?.valid) {
          console.log("Valido");
        } else {
          console.log("Invalido");
        }
      }
    );
  }

  //Función para enviar
  prepararObjeto() {
    if (this.formGroup) {
      return {
        modelo: this.formGroup?.get('modelo')?.value,
        anio: this.formGroup?.get('anio')?.value,
        nuevo: this.formGroup?.get('nuevo')?.value,
        color: this.formGroup?.get('color')?.value,
        precio: this.formGroup.get('precio')?.value
      }
    }
    return {
      modelo: '',
      anio: '',
      nuevo: '',
      color: '',
      precio: '',
    }
  }

  actualizarAuto() {
    const autoACrear = this.prepararObjeto();
    const actualizar$ = this.autoJphService
      .actualizarAuto(
        autoACrear, this.buscarConcesionario, this.buscarCarro
      );
    actualizar$
      .subscribe({
        next: (datos) => {
          console.log("LLEGUE")
          console.log(datos)
          const ruta = ['/autos', this.buscarConcesionario];
          this.router.navigate(ruta);
        },
        error: (error) => {
          console.error({ error })
        }
      })
  }

  regresar() {
    const ruta = ['/autos', this.buscarConcesionario];
    this.router.navigate(ruta);
  }

}
