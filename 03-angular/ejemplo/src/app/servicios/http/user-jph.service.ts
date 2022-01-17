import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserJphInterface } from '../interface/user-jph.interface';

@Injectable({
  providedIn: 'root'
})

export class UserJphService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  buscarTodos(parametrosConsulta?: any): Observable<UserJphInterface[]> {
    const url = environment.urlJPC + '/users';
    Object
      .keys(parametrosConsulta)
      .forEach(k => {
        if (!parametrosConsulta[k]) {
          delete parametrosConsulta[k]
        }
      }
      )
    return this.httpClient
      .get(url, { params: parametrosConsulta, })
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as UserJphInterface[]
        )
      );
  }

  buscarUno(idUsuario: number): Observable<UserJphInterface[]> {
    const url = environment.urlJPC + '/users' + idUsuario;
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as UserJphInterface[]
        )
      );
  }
}
