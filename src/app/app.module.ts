import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DndModule } from 'ngx-drag-drop';

import { AppComponent } from './app.component';
import { CargarNominaComponent } from './components/nomina/cargarnomina/cargarnomina.component';
import { SincronizacionComponent } from './components/sincronizar/sincronizacion/sincronizacion.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CreargrupoComponent } from './components/grupo/creargrupo/creargrupo.component';

import { NominaService } from './services/nomina.service';
import { CargararchivoService } from './services/cargararchivo.service';
import { ResumenComponent } from './components/nomina/resumen/resumen.component';
import { CamposposiblesService } from './services/camposposibles.service';
import { ResumengrupoComponent } from './components/grupo/resumengrupo/resumengrupo.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'cargarnomina', component: CargarNominaComponent},
  {path: 'resumen', component: ResumenComponent},
  {path: 'creargrupo', component: CreargrupoComponent},
  {path: 'resumengrupo', component: ResumengrupoComponent},
  { path: '**', component: InicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CargarNominaComponent,
    SincronizacionComponent,
    HeaderComponent,
    InicioComponent,
    ResumenComponent,
    CreargrupoComponent,
    ResumengrupoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    DndModule
  ],
  providers: [NominaService, CargararchivoService, CamposposiblesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
