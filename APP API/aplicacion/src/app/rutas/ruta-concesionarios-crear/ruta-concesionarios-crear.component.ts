import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcesionarioJphService } from 'src/app/servicios/http/concesionario-jph.service';
import { ConcesionarioJphInterface } from 'src/app/servicios/interface/concesionario-jph.interface';

@Component({
  selector: 'app-ruta-concesionarios-crear',
  templateUrl: './ruta-concesionarios-crear.component.html',
  styleUrls: ['./ruta-concesionarios-crear.component.scss']
})
export class RutaConcesionariosCrearComponent implements OnInit {

  formGroup?: FormGroup;
  concesionario?: ConcesionarioJphInterface

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly concesionarioJPHService: ConcesionarioJphService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.prepararFormulario();
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
      abierto: new FormControl({
        value: this.concesionario?.abierto,      //Booleano
        disabled: false
      }),
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

  crearConcesionario() {
    const concesionarioACrear = this.prepararObjeto();
    const actualizar$ = this.concesionarioJPHService
      .crearConcesionario(
        concesionarioACrear
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


