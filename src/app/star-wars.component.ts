import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { PeopleComponent } from './+people';
import { StarShipsComponent } from './+star-ships';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from '@angular/router';

@Routes([
  {path: '/people', component: PeopleComponent},
  {path: '/star-ships', component: StarShipsComponent},
])

@Component({
  moduleId: module.id,
  selector: 'star-wars-app',
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdIcon
  ],
  providers: [MdIconRegistry, ROUTER_PROVIDERS],
  templateUrl: 'star-wars.component.html',
  styleUrls: ['star-wars.component.css'],
})

export class StarWarsAppComponent {
  constructor(private router:Router) {}
  title = 'Star Wars';
  views: Object[] = [
    {
      name: 'People',
      path: ['/people'],
      description: 'People of Star Wars',
      icon: 'people'
    },
    {
      name: 'StarShips',
      path: ['/star-ships'],
      description: 'Star ships of Star Wars',
      icon: 'explore'
    },
  ];

  ngOnInit() {
    this.router.navigate(['/people'])
  }
}
