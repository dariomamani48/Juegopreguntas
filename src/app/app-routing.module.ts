import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'pregunta', component: PreguntasComponent},
  {path: 'respuesta', component: RespuestaComponent},
  {path:'',redirectTo:'/dashboard', pathMatch: 'full'},
  {path: '**',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
