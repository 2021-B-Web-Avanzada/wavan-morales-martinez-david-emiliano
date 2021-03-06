import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaAppComponent } from './rutas/ruta-app/ruta-app.component';
import { RutaForbiddenComponent } from './rutas/ruta-forbidden/ruta-forbidden.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaPostComponent } from './rutas/ruta-post/ruta-post.component';
import { RutaSalaComponent } from './rutas/ruta-sala/ruta-sala.component';
import { RutaUsuarioPerfilComponent } from './rutas/ruta-usuario-perfil/ruta-usuario-perfil.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { EsAdministradorGuard } from './servicios/auth/es-administrador.guard';
import { EstaLogeadoGuard } from './servicios/auth/esta-logeado.guard';


const routes: Routes = [
  {
    path: 'login',
    component: RutaLoginComponent,
  },
  {
    path: ':salaId/sala/:nombre',
    component: RutaSalaComponent,
  },
  { // Lazy-Route
    path: 'lazy-inventario',
    // Una vez importemos los módulos, se redirigirá a la ruta establecida
    loadChildren: () => import('./modulos/modulo-inventario/modulo-inventario.module')
      .then(m => m.ModuloInventarioModule)
  },
  {
    path: 'forbidden',
    component: RutaForbiddenComponent,
  },
  {
    path: 'not-found',
    component: RutaNotFoundComponent,
  },
  {
    path: 'inicio',
    canActivate: [EstaLogeadoGuard],
    component: RutaInicioComponent,
  },
  {
    path: 'app',
    component: RutaAppComponent,
    children: [
      {
        path: 'usuario',
        component: RutaUsuarioComponent,
      },
      {
        path: 'usuario/:idUsuario',
        component: RutaUsuarioPerfilComponent,
      },
      {
        path: 'post',
        component: RutaPostComponent,
        // Unicamente se podrá activar si existe un admin
        canActivate: [EsAdministradorGuard]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: RutaNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { useHash: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
