import { Component, OnInit } from '@angular/core';
import { Peticiones } from '../peticiones';
import { PeticionService } from '../peticion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-peticiones',
  templateUrl: './listar-peticiones.component.html',
  styleUrls: ['./listar-peticiones.component.css']
})
export class ListarPeticionesComponent implements OnInit{

  peticiones!:Peticiones[];
  page: number = 1; // Página actual
  totalItems: number = 0; // Inicializamos totalItems en 0

  constructor(private peticionesService:PeticionService, private router:Router){

  }
  ngOnInit(): void {
    this.obtenerPeticiones();
  }

  obtenerPeticiones(){
    this.peticionesService.obtenerListaPeticiones().subscribe(dato => {
      this.peticiones = dato;
      this.totalItems = this.peticiones.length;
    })
  }
  
}
