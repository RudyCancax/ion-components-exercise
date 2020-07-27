import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  usuarios: Observable<any>;

  constructor(private userService: UsersService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.usuarios = this.userService.getUsers();
  }

  favorite(dato) {
    this.presentToast('Guardó en Favoritos: ' + dato.name);
    // console.log(dato);
    
    this.lista.closeSlidingItems();
  }

  share(dato) {
    this.presentToast('Compartir: ' + dato.name);
    this.lista.closeSlidingItems();
  }

  trash(dato) {
    this.presentToast('Eliminado: ' + dato.name);
    this.lista.closeSlidingItems();
  }

  async presentToast( message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
