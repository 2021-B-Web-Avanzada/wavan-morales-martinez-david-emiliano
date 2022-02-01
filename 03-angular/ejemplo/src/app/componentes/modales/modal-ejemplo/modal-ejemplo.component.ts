import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RutaUsuarioPerfilComponent } from 'src/app/rutas/ruta-usuario-perfil/ruta-usuario-perfil.component';

@Component({
  selector: 'app-modal-ejemplo',
  templateUrl: './modal-ejemplo.component.html',
  styleUrls: ['./modal-ejemplo.component.scss']
})
export class ModalEjemploComponent implements OnInit {

  constructor(
    // Implementamos el decorador
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public dialogRef: MatDialogRef<RutaUsuarioPerfilComponent>
  ) { }

  cerrarDialogo() {
    this.dialogRef.close({ nombre: 'David' })
  }

  ngOnInit(): void {
    // Hacemos que se imprima en consola 
    // los datos que enviaron
    console.log(this.data);
  }

}
