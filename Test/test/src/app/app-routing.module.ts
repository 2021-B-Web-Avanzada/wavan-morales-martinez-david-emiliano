import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaProfileComponent } from './rutas/ruta-profile/ruta-profile.component';
import { RutaRegisterComponent } from './rutas/ruta-register/ruta-register.component';
import { RutaSearchComponent } from './rutas/ruta-search/ruta-search.component';

const routes: Routes = [

  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'register',
    component: RutaRegisterComponent
  },
  {
    path: 'home',
    component: RutaHomeComponent 
  },
  {
    path: 'search',
    component: RutaSearchComponent 
  },
  {
    path: 'profile',
    component: RutaProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
