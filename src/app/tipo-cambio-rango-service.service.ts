import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoCambioRangoServiceService {

  private baseURL = "http://localhost:8080";

  constructor(private httpClient:HttpClient) { }

  //Obtener lista de Tipos de cambio en rango de fechas
  obtenerListaTipoCambio(fecha_ini:string,fecha_fin:string):Observable<any>{
    
    return this.httpClient.post(`${this.baseURL}/tipoCambioRango`, {'fecha_ini':fecha_ini,'fecha_fin':fecha_fin});
  }
  
}
