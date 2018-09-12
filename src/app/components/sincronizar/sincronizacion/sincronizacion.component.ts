import { Component, OnInit, Input } from '@angular/core';
import { CargararchivoService } from '../../../services/cargararchivo.service';
import { CamposposiblesService } from '../../../services/camposposibles.service';
import { FormGroup, FormBuilder } from '@angular/forms';
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


  constructor(private cp: CamposposiblesService, private ca: CargararchivoService, private sf: FormBuilder) { 
    this.camposposibles = this.cp.getCamposPosibles();
    this.camposDetectados = this.ca.getCamposDetectados();
    this.cantCampDetectados = this.ca.getCantCamposDetectados();
  }

  getCategorias(){
    if(this.cantCategorias == 0){
      this.res = "No existen";
    }else{
      this.res = this.cantCategorias;
    }
  }

  ngOnInit() {
    this.cantCampPosibles = this.cp.camPosibles.length;   
    this.getCategorias();
  }

  // ------------------ Condiguracion drag-drop
  draggable = {
    // note that data is handled with JSON.stringify/JSON.parse
    // only set simple data or POJO's as methods will be lost 
    data: "myDragData",
    effectAllowed: "all",
    disable: false,
    handle: false
  };
  
  onDragStart(event:DragEvent) {
 
    console.log("drag started", JSON.stringify(event, null, 2));
  }
  
  onDragEnd(event:DragEvent) {
    
    console.log("drag ended", JSON.stringify(event, null, 2));
  }
  
  onDraggableCopied(event:DragEvent) {
    
    console.log("draggable copied", JSON.stringify(event, null, 2));
  }
  
  onDraggableLinked(event:DragEvent) {
      
    console.log("draggable linked", JSON.stringify(event, null, 2));
  }
    
  onDraggableMoved(event:DragEvent) {
    
    console.log("draggable moved", JSON.stringify(event, null, 2));
  }
      
  onDragCanceled(event:DragEvent) {
    
    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }
  
  onDragover(event:DragEvent) {
    
    console.log("dragover", JSON.stringify(event, null, 2));
  }
  /*
  onDrop(event:DndDropEvent) {
    console.log("dropped", JSON.stringify(event, null, 2));
  }
  */
//---------------------- fin configuracion


}
