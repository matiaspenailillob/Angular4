import { Component, OnInit, ViewChild, Input , Output, EventEmitter} from '@angular/core';
import { NgModel, FormsModule, FormBuilder, FormControl, FormGroup, Validators, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import { SincronizacionComponent } from '../../sincronizar/sincronizacion/sincronizacion.component';

@Component({
  selector: 'app-cargarnomina',
  templateUrl: './cargarnomina.component.html',
  styleUrls: ['./cargarnomina.component.css']
})
export class CargarNominaComponent implements OnInit {

  solicitud: any;
  estado: any;
  cargaNomina: any;
  excelFile: any;

  cargarnominaForm: FormGroup;

  compSincronizacion: SincronizacionComponent;

  solicitudPrueba: number = 1234;

  constructor(private cnf: FormBuilder) {
    this.estado = false;
    this.cargaNomina = {
      solicitud: '',
      file: ''
    };
  }

  ngOnInit() {
    this.cargarnominaForm = this.cnf.group({
      solicitud: ['',Validators.requiredTrue],
      excelFile: ['',Validators.requiredTrue]
    });

    this.onChange();
  }

  onChange() {
    this.cargaNomina.solicitud = this.cargarnominaForm.value.solicitud;
    this.excelFile = this.cargarnominaForm.value.excelFile; 
  }

  onSubmit() {
  }

  validateSolicitud(){
    return this.solicitud == this.solicitudPrueba && this.solicitud != null ? true : false;
  }

  validate(){
    return this.solicitud != null ? true : false;
  }

  validateScan(){
    return this.excelFile != "" ? true : false;
  }

}
/*
export function solicitudValidation(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const res = nameRe.test(control.value);
    return res ? {'solicitud': {value: control.value}} : null;
  };
}
*/
