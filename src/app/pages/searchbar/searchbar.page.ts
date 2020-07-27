import { Component, OnInit } from '@angular/core';
import { OpcionesService } from '../../services/opciones.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albumes: any[] = [];
  textoBuscar = '';

  constructor(private opcionesService: OpcionesService) { }

  ngOnInit() {
    this.opcionesService.getCanciones().subscribe(
      albums => {
        console.log(albums);
        this.albumes = albums;
      }
    );
  }

  buscar( event ) {
    this.textoBuscar = event.detail.value;
  }

}
