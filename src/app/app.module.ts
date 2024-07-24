import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarTipoCambioComponent } from './listar-tipo-cambio/listar-tipo-cambio.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListarPeticionesComponent } from './listar-peticiones/listar-peticiones.component';
import { ListarTipoCambioFechaComponent } from './listar-tipo-cambio-fecha/listar-tipo-cambio-fecha.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarTipoCambioComponent,
    ListarPeticionesComponent,
    ListarTipoCambioFechaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
