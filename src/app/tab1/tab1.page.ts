import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { } 
  numero: string = null;
  base: string;
  n_base: string;
  vl_base: number;
  vl_n_base: number;  
  converter() {
    switch (this.n_base) {
      case 'bin':
        this.vl_n_base = 2;
        break;
      case 'dec': 
        this.vl_n_base = 10;
        break;
      case 'oct': 
        this.vl_n_base = 8;
        break;
      case 'hex': 
        this.vl_n_base = 16;
        break;
      default:
        console.error(this.base);
    }
    let numeroValor: any = Number(this.numero);
    let numeroNovo: string;
    numeroNovo = numeroValor.toString(this.vl_n_base);
    console.log(numeroNovo)
  }
}
