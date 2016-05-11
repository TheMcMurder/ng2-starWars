import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-star-ships',
  template: `
    starships works
  `,
  directives: [
    MD_CARD_DIRECTIVES,
  ],
  styleUrls: ['star-ships.component.css'],
})
export class StarShipsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
