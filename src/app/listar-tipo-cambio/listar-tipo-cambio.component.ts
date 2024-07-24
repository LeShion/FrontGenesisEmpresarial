import { Component, OnInit } from '@angular/core';
import { TipoCambioRango } from '../tipo-cambio-rango';
import { TipoCambioRangoServiceService } from '../tipo-cambio-rango-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-tipo-cambio',
  templateUrl: './listar-tipo-cambio.component.html',
  styleUrls: ['./listar-tipo-cambio.component.css']
})
export class ListarTipoCambioComponent implements OnInit {

  tipoCambio!: TipoCambioRango[];
  fecha_ini: any;
  fecha_final: any;
  page: number = 1;
  totalItems: number = 0;
  AlertaExito: boolean = false;
  maxFecha!: string;

  promedioCompra: number = 0;
  promedioVenta: number = 0;

  isLoading: boolean = false;

  constructor(private tipoCambioService: TipoCambioRangoServiceService, private router: Router) {
    this.maxFecha = new Date().toISOString().split('T')[0];
  }

  ngOnInit(): void {
    //this.obtenerTipoCambioRango();
  }

  obtenerTipoCambioRango(fecha_ini: string, fecha_final: string) {
    this.isLoading = true;
    setTimeout(() => {
      this.tipoCambioService.obtenerListaTipoCambio(fecha_ini, fecha_final).subscribe(dato => {
        this.tipoCambio = dato;
        this.totalItems = this.tipoCambio.length;
        this.AlertaExito = this.totalItems > 0;

        let sumaCompra = 0;
        let sumaVenta = 0;

        for (let tc of this.tipoCambio) {
          sumaCompra += tc.compra;
          sumaVenta += tc.venta;
        }

        this.promedioCompra = sumaCompra / this.totalItems;
        this.promedioVenta = sumaVenta / this.totalItems;

        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        console.error('Error al obtener los datos', error);
      });
    }, 0); // Usar un timeout de 0 para forzar una actualización del DOM
  }

  enviarFechas() {
    if (!this.fecha_ini || !this.fecha_final) {
      //alert("Por favor, selecciona ambas fechas.");
      return;
    }
    if (this.fecha_ini > this.fecha_final) {
      alert("Por favor, la fecha inicial debe ser menor a la final.");
      return;
    }

    const fecha_ini_raw = (<HTMLInputElement>document.getElementById('fechaInicial')).value;
    const fecha_final_raw = (<HTMLInputElement>document.getElementById('fechaFinal')).value;

    this.fecha_ini = this.formatDate(fecha_ini_raw);
    this.fecha_final = this.formatDate(fecha_final_raw);

    if (this.fecha_ini && this.fecha_final) {
      this.obtenerTipoCambioRango(this.fecha_ini, this.fecha_final);
    } else {
      console.error('Las fechas no están definidas.');
    }
  }

  formatDate(date: string): string {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }

  limpiarData() {
    this.tipoCambio = [];
    this.fecha_ini = '';
    this.fecha_final = '';
    this.totalItems = 0;
    this.AlertaExito = false;
    this.promedioCompra = 0;
    this.promedioVenta = 0;
  }
}