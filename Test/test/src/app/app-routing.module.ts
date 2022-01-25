import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaRegisterComponent } from './rutas/ruta-register/ruta-register.component';

const routes: Routes = [

  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'register',
    component: RutaRegisterComponent
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
