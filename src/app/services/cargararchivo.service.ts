import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CargararchivoService {

  campDetectados: string[];
  cantCampDetectados: any;


  constructor() { 
  }

  

  getCamposDetectados() {
    return this.campDetectados = [ 'Rut', 'Nom', 'Ap', 'Genero', 'Fecha' ];
  }

  getCantCamposDetectados(){
    return this.cantCampDetectados = this.campDetectados.length;
  }
}
