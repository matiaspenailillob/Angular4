import { Component, OnInit, Input } from '@angular/core';
import { NominaService } from '../../../services/nomina.service';


@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  infoResumen: any[];
  

  constructor(private ns: NominaService) { 
    
  }

  ngOnInit() {
    this.infoResumen = this.ns.getResumen();
  }

}
