import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  private baseURL = "http://localhost:8080";

  constructor(private httpClient:HttpClient) { }

  //Obtener variables
  obtenerListaPeticiones():Observable<any>{
    
    return this.httpClient.get(`${this.baseURL}/getPeticiones`);

  }
}
