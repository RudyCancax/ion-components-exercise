import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { OpcionesService } from '../../services/opciones.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes: Observable<Componente[]>;


  constructor( private menuCtrl: MenuController, private opcionesService: OpcionesService) { }

  ngOnInit() {
    this.componentes = this.opcionesService.getMenuOpciones();
  }

  toggleMenu() {
    console.log( 'Menu' );
    this.menuCtrl.toggle();
  }

}

