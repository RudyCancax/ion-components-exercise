import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  lading: any;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.presentLoading('Please Wait');

    setTimeout(() => {
      this.loadingCtrl.dismiss();
    }, 1500);
  }

  async presentLoading( message: string) {
    const loading = await this.loadingCtrl.create({
      message
    });
    return await loading.present();
  }

}
