import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { OpcionesService } from '../../services/opciones.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  // seleccionadoPorDefecto = 'Todos';

  superHeroes: Observable<any>;
  publisher = '';

  constructor(private dataService: OpcionesService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged( event ) {
    const valor = event.detail.value;
    console.log(valor);

    if (valor === 'todos') {
      this.publisher = '';
      return;
    }

    this.publisher = valor;
  }

}
