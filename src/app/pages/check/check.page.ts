import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      valor: 'primary',
      seleccionado: true
    },
    {
      valor: 'secondary',
      seleccionado: false
    },
    {
      valor: 'tertiary',
      seleccionado: false
    },
    {
      valor: 'success',
      seleccionado: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick( valor: any ) {
    console.log(valor);
  }
}
