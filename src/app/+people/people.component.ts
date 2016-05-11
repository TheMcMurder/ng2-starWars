import { Component, OnInit } from '@angular/core';
import { StarWarsDataService } from '../shared/star-wars-data.service';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { NgFor } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-people',
  directives: [
    NgFor,
    MD_CARD_DIRECTIVES,
  ],
  template: `
    <div class="card-container">
        <md-card *ngFor="let person of starwars.people | async">
          <md-card-title>
            {{person.name}}
          </md-card-title>
          <md-card-content>
            <img [src]="person.image">
          </md-card-content>
        </md-card>
    </div>
  `,
  styleUrls: ['people.component.css'],
  providers: [StarWarsDataService],
})
export class PeopleComponent implements OnInit {

  constructor(public starwars:StarWarsDataService) {}

  ngOnInit() {
  }

}
