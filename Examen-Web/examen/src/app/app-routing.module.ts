import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaContactComponent } from './rutas/ruta-contact/ruta-contact.component';
import { RutaDownloadComponent } from './rutas/ruta-download/ruta-download.component';

const routes: Routes = [
  {
    path: 'download',
    component: RutaDownloadComponent
  },
  {
    path: 'contact',
    component: RutaContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
