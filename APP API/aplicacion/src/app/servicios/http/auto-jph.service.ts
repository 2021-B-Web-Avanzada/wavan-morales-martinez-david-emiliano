import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AutoJphInterface } from '../interface/auto-jph.interface';

@Injectable({
  providedIn: 'root'
})
export class AutoJphService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  buscarTodos(parametrosConsulta?:any): Observable<AutoJphInterface[]> {
    const url = environment.urlJPC + '/autos';
    Object
      .keys(parametrosConsulta)
      .forEach( k=> {
        if(!parametrosConsulta[k]){
          delete parametrosConsulta[k]
        }
      })
    return this.httpClient
      .get(url, {params: parametrosConsulta})
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as AutoJphInterface[]
        )
      );
  }

  buscarUno(nombreConcesionario: string): Observable<AutoJphInterface> {
    const url = environment.urlJPC + '/autos/' + nombreConcesionario;
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as AutoJphInterface
        )
      );
  }

}
