import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Headers, Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class NominaService {

  presURL = "https://proyectonomina-bice.firebaseio.com/nomina.json";


  constructor(private http: Http) { }

  infoResumen: any[];

  getResumen(){
    this.infoResumen = [
      {cantPersonas: 2,  cantCargas: 8},
      {cantPersonas: 8, cantCargas: 12},
      {cantPersonas: 4,cantCargas: 6},
      {cantPersonas: 3, cantCargas: 15}
    ];
    return this.infoResumen;
  }

  postNomina(nomina: any){
    const newnom = JSON.stringify(nomina);
    const headers = new Headers({
      'Content-Type':'Application/json'
    });

    return this.http.post(this.presURL, newnom, {headers}).pipe(map( res =>{ 
      console.log(res.json());
      return res.json();
    }));
  }
  /*
  generarResumen(){
    swal({
      title: 'Está seguro?',
      text: `¿Seguro desea eliminar al cliente ${customer.firstName} ${
        customer.lastName
      }?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.deleteCustomer(customer.id).subscribe(data => {
          this.customers = this.customers.filter(c => c !== customer);
        });

        swal('Eliminado!', 'Se ha eliminado el cliente.', 'success');
      }
    });
  }
  */
}
