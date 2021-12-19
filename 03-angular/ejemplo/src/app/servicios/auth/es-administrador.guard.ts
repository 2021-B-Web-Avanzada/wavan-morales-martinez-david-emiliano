import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class EsAdministradorGuard implements CanActivate{
// Inyección de Dependencias
  constructor(
    private readonly _authService:AuthService,
    private readonly _router: Router
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable <boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Buscamos el permiso que sea administrador, si esta activado nos dejará ingresar
    const esAdministrador = this._authService.roles.some((permiso)=>permiso ==='admin');
    // Caso contrario nos redirigirá a la página bloqueada
    if (!esAdministrador){
      this._router.navigate(['/forbidden'])
    }
    return esAdministrador;
  }
}
