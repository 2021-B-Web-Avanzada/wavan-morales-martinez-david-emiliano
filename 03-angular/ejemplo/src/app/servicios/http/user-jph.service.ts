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

  buscarTodos(): Observable<UserJphInterface[]> {
    const url = environment.urlJPC + '/users';
    return this.httpClient
      .get(url)
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
