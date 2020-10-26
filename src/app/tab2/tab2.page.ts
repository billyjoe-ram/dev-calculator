import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss', '../app.component.scss']
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
    const meuAlert = document.getElementsByTagName("ion-alert");
    
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
      message: `A cor selecionada foi ${cor} </span>`,
      buttons: ['Muito Obrigado!']
    });    
    
    for (var i = 0; i < meuAlert.length; i++) {
      meuAlert[i].style.backgroundColor=`${corAlert}`;
    }

    console.log(corAlert);    
    await alert.present();
  }

}
