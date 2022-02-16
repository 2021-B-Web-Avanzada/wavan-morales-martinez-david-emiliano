import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AutoJphInterface } from '../interface/auto-jph.interface';
import { ConcesionarioJphCreateInterface } from '../interface/concesionario-jph-create.interface';
import { ConcesionarioJphInterface } from '../interface/concesionario-jph.interface';

@Injectable({
  providedIn: 'root'
})
export class ConcesionarioJphService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  buscarConcesionarios(parametrosConsulta?: any): Observable<ConcesionarioJphInterface[]> {
    const url = environment.urlJPC + '/concesionario';
    return this.httpClient
      .get(
        url,
      )
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as ConcesionarioJphInterface[]
        )
      );
  }

  buscarConcesionario(parametrosConsulta?:any): Observable<ConcesionarioJphInterface> {
    const url = environment.urlJPC + '/autos/' + parametrosConsulta;
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as ConcesionarioJphInterface
        )
      );
  }

  crearConcesionario(datosConcesionario:ConcesionarioJphCreateInterface): Observable<any> {
    const url = environment.urlJPC + '/concesionario';
    return this.httpClient
      .post(url, datosConcesionario);
  }

  actualizarConcesionario(datosActualizarConcesionario:ConcesionarioJphCreateInterface,nombreConcesionario:string): Observable<any> {
    const url = environment.urlJPC + '/concesionario/' + nombreConcesionario;
    return this.httpClient
      .put(url, datosActualizarConcesionario);
  }

  eliminarConcesionario(nombreConcesionario:string): Observable<any> {
    const url = environment.urlJPC + '/concesionario/'+ nombreConcesionario;
    return this.httpClient
      .delete(url);
  }

  mostrarAutos(nombreConcesionario:string): Observable<AutoJphInterface[]>{
    const url = environment.urlJPC +'/autos/concesionario/' + nombreConcesionario;
    return this.httpClient
      .get(
        url,
      )
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as AutoJphInterface[]
        )
      );
  }

}
