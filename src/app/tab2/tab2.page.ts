import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertController: AlertController) {}
  red: string;
  green: string;
  blue: string;  
  async cor() {    
    // Variáveis para o input e exibição
    let pRed = this.red;
    let pGreen = this.green;
    let pBlue = this.blue;
    let cor = pRed + pGreen + pBlue;
    let corNome;
    
    // Cores padrão
    switch (cor) {
      case 'ff0000':    
        corNome = 'vermelho';
        break;
      case '00ff00': 
        corNome = 'verde';
        break;
      case '0000ff': 
        corNome = 'azul';
        break;      
      default:
        console.error(cor);
        break;
    }        

    // Exibir a cor em um alert
    const alert = await this.alertController.create({
      cssClass: 'cor-alert',
      header: 'Resultado',      
      message: `A cor selecionada foi ${corNome}`,
      buttons: ['Muito Obrigado!']
    });
    console.log(cor);
    await alert.present();
  }

}
