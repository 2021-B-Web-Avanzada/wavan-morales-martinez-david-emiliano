import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConcesionarioJphInterface } from '../interface/concesionario-jph.interface';

@Injectable({
  providedIn: 'root'
})
export class ConcesionarioJphService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  
  buscarTodos(parametrosConsulta?:any): Observable<ConcesionarioJphInterface[]> {
    const url = environment.urlJPC + '/concesionario';
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
          (resultadoEnData) => resultadoEnData as ConcesionarioJphInterface[]
        )
      );
  }



  buscarUno(nombreConcesionario: string): Observable<ConcesionarioJphInterface> {
    const url = environment.urlJPC + '/concesionario/' + nombreConcesionario;
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as ConcesionarioJphInterface
        )
      );
  }

}
