import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    public mobileFriendlyZoomSetting = '150%';
  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Elija el día',
      buttons: [{
        text: 'Hoy',
        role: 'destructive',
        icon: 'today-outline',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Mañana',
        icon: 'calendar-outline',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  }
