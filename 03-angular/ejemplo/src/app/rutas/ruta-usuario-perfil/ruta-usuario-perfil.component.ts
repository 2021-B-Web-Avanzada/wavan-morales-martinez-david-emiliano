
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from "@angular/forms";
import { UserJphInterface } from 'src/app/servicios/interface/user-jph.interface';
import { UserJphService } from 'src/app/servicios/http/user-jph.service';
import { ModalEjemploComponent } from 'src/app/componentes/modales/modal-ejemplo/modal-ejemplo.component';
import { MatDialog } from '@angular/material/dialog';
import { BrowserTransferStateModule } from '@angular/platform-browser';


@Component({
  selector: 'app-ruta-usuario-perfil',
  templateUrl: './ruta-usuario-perfil.component.html',
  styleUrls: ['./ruta-usuario-perfil.component.scss']
})

export class RutaUsuarioPerfilComponent implements OnInit {
  idUsuario = 0;
  usuarioActual?: UserJphInterface;
  formGroup?: FormGroup;
  valorKnob = 30;
  items = [
    {
      label: 'Create', icon: 'pi pi-refresh', command: () => {
        console.log('Create');
      }
    },
    {
      label: 'Delete', icon: 'pi pi-times', routerLink: ['/recyclerbin']
    }

  ];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly userJPHService: UserJphService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    public dialog: MatDialog
  ) { }

  guardar() {
    console.log('Guardar')
  }

  ngOnInit(): void {
    const parametrosRuta$ = this.activatedRoute.params;
    parametrosRuta$.subscribe(
      (parametrosRuta) => {
        console.log(parametrosRuta);
        this.idUsuario = +parametrosRuta['idUsuario'];
        this.buscarUsuario(this.idUsuario);
      },
      () => {
      },
      () => {
      }
    );
  }

  private prepararFormulario() {
    this.formGroup = this.formBuilder.group({
      email: new FormControl({
        value: this.usuarioActual ? this.usuarioActual.email : '',
        disabled: false//this.usuarioActual
      },
        [Validators.required,
        Validators.email]),
      esAdministrador: new FormControl(true)
    });

    const cambio$ = this.formGroup.valueChanges;
    cambio$.subscribe(
      (data) => {
        if (this.formGroup?.valid) {
          console.log('valido');
        } else {
          console.log('invalido');
        }
      }
    );
  }

  buscarUsuario(id: number) {
    const buscarUsuario$ = this.userJPHService.buscarUno(id);
    buscarUsuario$.subscribe(
      (data) => {
        this.usuarioActual = data;
        this.prepararFormulario();
      },
      (error) => {
        console.log(error);
      },
      () => {
      }
    );
  }

  // Funci??n para env??ar 
  prepararObjeto() {
    if (this.formGroup) {
      const email = this.formGroup.get('email')
      if (email) {
        return {
          email: email.value
        }
      }
    }
    return {
      email: '',
    }
  }

  actualizarUsuario() {
    if (this.usuarioActual) {
      const valoresAActualizar = this.prepararObjeto();
      const actualizar$ = this.userJPHService
        .actualizarPorId(
          this.usuarioActual.id,
          valoresAActualizar
        );

      actualizar$
        .subscribe({
          next: (datos) => {
            console.log({ datos });
            const url = ['/app', 'usuario'];
            this.router.navigate(url);
          },
          error: (error) => {
            console.error({ error })
          }
        });
    }
  }

  abrirDialogo () {
    const referenciaDialogo = this.dialog.open (
      ModalEjemploComponent,
      {
        // Agregamos esta l??ne para que no pueda cerrar
        // el dialogo, si no es con el bot??n del modal
        disableClose: true,
        data: {
          animal: 'panda'
        },
      }
    );
    const despuesCerrado$ = referenciaDialogo.afterClosed();
    despuesCerrado$
      .subscribe(
        (datos) => {
          console.log(datos)
        }
      );
  }

  model = {
    left: true,
    middle: false,
    right: false
  }

}