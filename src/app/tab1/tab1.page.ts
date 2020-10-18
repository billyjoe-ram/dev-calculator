import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController) { } 
  numero: string = null;
  base: string;
  n_base: string;
  vl_base: number;
  vl_n_base: number;      
  async resultado() {
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
    let numeroNovo: any;
    switch (this.base) {
      case 'bin':
        this.vl_base = 2;                
        break;
      case 'dec': 
        this.vl_base = 10;        
        break;
      case 'oct': 
        this.vl_base = 8;        
        break;
      case 'hex': 
        this.vl_base = 16;        
        break;
      default:
        console.error(this.base);
    }
    numeroNovo = Number.parseInt(numeroValor, this.vl_n_base);
    console.log(numeroNovo);
    const alert = await this.alertController.create({
      cssClass: 'resultado',
      header: 'Resultado',      
      message: `${numeroNovo}`,
      buttons: ['Muito Obrigado!']
    });

    await alert.present();
  }
}
