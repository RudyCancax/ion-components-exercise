import { Component, OnInit } from '@angular/core';
import { OpcionesService } from '../../services/opciones.service';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private opcionesService: OpcionesService ) { }

  ngOnInit() {
    this.componentes = this.opcionesService.getMenuOpciones();
  }

}
