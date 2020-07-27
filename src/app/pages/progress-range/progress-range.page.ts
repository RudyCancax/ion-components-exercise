import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-range',
  templateUrl: './progress-range.page.html',
  styleUrls: ['./progress-range.page.scss'],
})
export class ProgressRangePage implements OnInit {

  valorProgress = 0;
  valorPorcentaje = 0;

  constructor() { }

  ngOnInit() {
  }

  cambioRango ( event ) {
    this.valorProgress = event.detail.value / 100;
    this.valorPorcentaje = event.detail.value;
  }

}
