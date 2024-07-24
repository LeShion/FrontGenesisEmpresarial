import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTipoCambioComponent } from './listar-tipo-cambio/listar-tipo-cambio.component';
import { ListarPeticionesComponent } from './listar-peticiones/listar-peticiones.component';
import { ListarTipoCambioFechaComponent } from './listar-tipo-cambio-fecha/listar-tipo-cambio-fecha.component';

const routes: Routes = [
  {path:'tipo-cambio', component:ListarTipoCambioComponent},
  {path:'',redirectTo:'tipo-cambio',pathMatch:'full'},
  {path:'peticiones', component:ListarPeticionesComponent},
  {path:'tc-fecha-inicial', component:ListarTipoCambioFechaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
