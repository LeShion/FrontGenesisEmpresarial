import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  private baseURL = "http://localhost:8080";

  constructor(private httpClient:HttpClient) { }

  //Obtener variables
  obtenerListaPeticiones(fecha_ini:string):Observable<any>{
    const parameter = new Data();
    parameter.fecha_ini = fecha_ini;
    
    return this.httpClient.post(`${this.baseURL}/tipoCambioFechaInicial`, parameter);

  }
}
