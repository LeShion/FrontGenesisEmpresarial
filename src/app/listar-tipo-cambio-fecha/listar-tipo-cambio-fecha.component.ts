import { Component, OnInit } from '@angular/core';
import { ParameterService } from '../parameter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-tipo-cambio-fecha',
  templateUrl: './listar-tipo-cambio-fecha.component.html',
  styleUrls: ['./listar-tipo-cambio-fecha.component.css']
})
export class ListarTipoCambioFechaComponent implements OnInit {

  tiposCambio: any[] = [];
  fecha_ini: string = '';
  isLoading: boolean = false;
  alertaExito: boolean = false;
  maxFecha: string;
  page: number = 1;
  totalItems: number = 0;

  constructor(private parameterService: ParameterService, private router: Router) {
    this.maxFecha = new Date().toISOString().split('T')[0];
  }

  ngOnInit(): void {
    // Inicializar si es necesario
  }

  obtenerTipoCambioFecha(fecha_ini: string): void {
    this.isLoading = true;
    this.parameterService.obtenerListaPeticiones(fecha_ini).subscribe(
      (dato: any) => {
        if (dato && dato.resultado) {
          this.tiposCambio = dato.resultado;
          this.totalItems = this.tiposCambio.length;
          this.alertaExito = this.totalItems > 0;
        } else {
          this.tiposCambio = [];
          this.totalItems = 0;
          this.alertaExito = false;
        }
        this.isLoading = false;
      },
      error => {
        console.error('Error al obtener los tipos de cambio:', error);
        this.tiposCambio = [];
        this.totalItems = 0;
        this.alertaExito = false;
        this.isLoading = false;
      }
    );
  }

  enviarFecha(): void {
    if (!this.fecha_ini) {
      alert("Por favor, selecciona una fecha.");
      return;
    }
  
    // Convertir la fecha de 'YYYY-MM-DD' a 'DD/MM/YYYY'
    const [year, month, day] = this.fecha_ini.split('-');
    const fechaConvertida = `${day}/${month}/${year}`;
  
    this.obtenerTipoCambioFecha(fechaConvertida);
  }

  formatDate(date: string): string {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }

  limpiarData(): void {
    this.tiposCambio = [];
    this.fecha_ini = '';
    this.totalItems = 0;
    this.alertaExito = false;
  }
}