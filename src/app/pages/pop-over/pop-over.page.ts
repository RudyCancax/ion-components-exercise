import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopInfoComponent } from '../../components/pop-info/pop-info.component';



@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.page.html',
  styleUrls: ['./pop-over.page.scss'],
})
export class PopOverPage implements OnInit {

  constructor(private popOverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop( evento ) {
    const popover = await this.popOverCtrl.create({
      component: PopInfoComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    // const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();
    console.log('Padre: ', data);
    
  }
}
