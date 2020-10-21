import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertController: AlertController) {}
  base: string;
  red: string;
  green: string;
  blue: string;
  tamanho: number; 
  
  async cor() {    
    // Variáveis para o input e exibição
    let pRed = this.red;
    let pGreen = this.green;
    let pBlue = this.blue;
    let cor;
    let corAlert;
    
    // Cores padrão
    switch (this.base) {
      case 'hex':    
        cor = `#${pRed}${pGreen}${pBlue}`;
        corAlert = cor;
        break;
      case 'rgb': 
        cor = `(${pRed}, ${pGreen}, ${pBlue})`;
        corAlert = `rgb${cor}`;
        break; 
      default:
        console.log(cor);
        break;     
    }      

    // Exibir a cor em um alert
    const alert = await this.alertController.create({
      cssClass: 'cor-alert',
      header: 'Resultado',      
      message: `A cor selecionada foi <span style="color: ${corAlert};"> ${cor} </span>`,
      buttons: ['Muito Obrigado!']
    });    
    console.log(corAlert);
    await alert.present();
  }

}
