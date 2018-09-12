import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CamposposiblesService {

  camPosibles: string[];



  constructor() { 
  }

  

  getCamposPosibles() {
    return this.camPosibles = [ 'Rut Titular', 'Nombre', 'Apellido', 'Sexo', 'Fecha Nacimiento' ];
  }

}
