import { Component, OnInit, Input } from '@angular/core';
import { CargararchivoService } from '../../../services/cargararchivo.service';
import { CamposposiblesService } from '../../../services/camposposibles.service';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { DndDropEvent } from 'ngx-drag-drop';


@Component({
  selector: 'app-sincronizacion',
  templateUrl: './sincronizacion.component.html',
  styleUrls: ['./sincronizacion.component.css']
})
export class SincronizacionComponent implements OnInit {

  camposposibles: string[] ;
  camposDetectados: string[];
  solicitudDesignada: any = 0;
  cantCampPosibles: any ;
  cantCampDetectados: any ;
  cantCategorias: any = 0;
  res: any;
  sincronizacionForm: FormGroup;
  selectCampoPosible: any;


  constructor(private cp: CamposposiblesService, private ca: CargararchivoService, private sf: FormBuilder) {
    this.camposposibles = this.cp.getCamposPosibles();
    this.camposDetectados = this.ca.getCamposDetectados();
    this.cantCampDetectados = this.ca.getCantCamposDetectados();
    this.cantCampPosibles = this.cp.camPosibles.length;
    this.sincronizacionForm.value.selectCampoPosible = -1;
  }

  getCategorias() {
    if(this.cantCategorias == 0){
      return this.res = "No Existen";
    }else{
      return this.res = this.cantCategorias;
    }
    //return this.cantCategorias == 0 ? "No Existen" : this.cantCategorias;
  }

  ngOnInit() {

    this.getCategorias();
    this.sincronizacionForm = this.sf.group({
      selectCampoPosible: [Validators.required]
    });
  }

  validateSincronizacion(){
    this.selectCampoPosible = this.sincronizacionForm.value.selectCampoPosible;
    return this.selectCampoPosible != -1 ? true: false;
  }

  onSubmit(){
    return false;
  }


}
