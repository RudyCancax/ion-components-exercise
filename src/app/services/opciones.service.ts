import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpcionesService {

  constructor( private http: HttpClient) { }

  getMenuOpciones() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getCanciones() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes() {
    return this.http.get<any[]>('/assets/data/superheroes.json')
      .pipe(
        delay(1500)
      );
  }
}
