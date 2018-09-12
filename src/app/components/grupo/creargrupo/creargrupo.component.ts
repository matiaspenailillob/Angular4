import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-creargrupo',
  templateUrl: './creargrupo.component.html',
  styleUrls: ['./creargrupo.component.css']
})
export class CreargrupoComponent implements OnInit {

  crearGrupoForm: FormGroup;
  nombreGrupo: string;
  resp: any;

  constructor(private cg: FormBuilder) { }

  ngOnInit() {
    this.crearGrupoForm = this.cg.group({
      nombreGrupo: ['', Validators.requiredTrue]
    });

    this.onChange();
  }

  onChange() {
    this.nombreGrupo = this.crearGrupoForm.value.nombreGrupo;
  }

  validateName(){
    return this.nombreGrupo.length > 0 ? true : false;
  }

}
