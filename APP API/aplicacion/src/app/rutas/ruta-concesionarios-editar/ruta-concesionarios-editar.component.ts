import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcesionarioJphService } from 'src/app/servicios/http/concesionario-jph.service';
import { ConcesionarioJphInterface } from 'src/app/servicios/interface/concesionario-jph.interface';

@Component({
  selector: 'app-ruta-concesionarios-editar',
  templateUrl: './ruta-concesionarios-editar.component.html',
  styleUrls: ['./ruta-concesionarios-editar.component.scss']
})
export class RutaConcesionariosEditarComponent implements OnInit {

  formGroup?: FormGroup;
  concesionario?: ConcesionarioJphInterface
  buscarConcesionario = '';
  arreglo: ConcesionarioJphInterface[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
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
      .buscarConcesionario(this.buscarConcesionario)
      .subscribe({
          next: (datos) => { // try then
            this.concesionario = datos;
            this.prepararFormulario();
            console.log(datos);
          },
          error: (error) => { // catch
            console.error({error});
          },
        }
      )
  }

  private prepararFormulario() {
    this.formGroup = this.formBuilder.group({
      nombreConcesionario: new FormControl({
        value: this.concesionario ? this.concesionario?.nombreConcesionario : '',
        disabled: false
      },
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]),
      direccion: new FormControl({
        value: this.concesionario ? this.concesionario?.direccion : '',
        disabled: false
      },
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50)
        ]),
      telefono: new FormControl({
        value: this.concesionario ? this.concesionario?.telefono : '',
        disabled: false
      },
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(15)
        ]),
      abierto: new FormControl(
        this.concesionario?.abierto,      //Booleano
      ),
      web: new FormControl({
        value: this.concesionario ? this.concesionario?.web : '',
        disabled: false
      },
        [
          Validators.required,
          Validators.maxLength(40)
        ]),
      logo: new FormControl({
        value: this.concesionario ? this.concesionario?.logo : '',
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
        nombreConcesionario: this.formGroup?.get('nombreConcesionario')?.value,
        direccion: this.formGroup?.get('direccion')?.value,
        telefono: this.formGroup?.get('telefono')?.value,
        abierto: this.formGroup?.get('abierto')?.value,
        web: this.formGroup?.get('web')?.value,
        logo: this.formGroup.get('logo')?.value
      }
    }
    return {
      nombreConcesionario: '',
      direccion: '',
      telefono: '',
      abierto: '',
      web: '',
      logo: '',
    }
  }

  actualizarConcesionario() {
    const concesionarioACrear = this.prepararObjeto();
    const actualizar$ = this.concesionarioJphService
      .actualizarConcesionario(
        concesionarioACrear, this.buscarConcesionario
      );
    actualizar$
      .subscribe({
        next: (datos) => {
          console.log(datos)
          const ruta = ['/concesionarios'];
          this.router.navigate(ruta);

        },
        error: (error) => {
          console.error({ error })
        }
      });

  }

  regresar(){
    const ruta = ['/concesionarios'];
    this.router.navigate(ruta);
  }

}
