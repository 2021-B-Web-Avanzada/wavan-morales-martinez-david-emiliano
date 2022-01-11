import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaContactComponent } from './rutas/ruta-contact/ruta-contact.component';
import { RutaDownloadComponent } from './rutas/ruta-download/ruta-download.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';

const routes: Routes = [
  {
    path: 'home',
    component: RutaHomeComponent
  },
  {
    path: 'download',
    component: RutaDownloadComponent
  },
  {
    path: 'contact',
    component: RutaContactComponent
  },
  {
    path:'',
    redirectTo: '/home',
    pathMatch:'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
