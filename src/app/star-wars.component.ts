import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { StarShipsComponent } from './+star-ships';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from '@angular/router';

@Routes([
  {path: '/star-ships', component: StarShipsComponent},
])

@Component({
  moduleId: module.id,
  selector: 'star-wars-app',
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdIcon,
  ],
  providers: [MdIconRegistry, ROUTER_PROVIDERS],
  templateUrl: 'star-wars.component.html',
  styleUrls: ['star-wars.component.css'],
})

export class StarWarsAppComponent {
  constructor(private router:Router) {}
  title = 'Star Wars';

  ngOnInit() {
    this.router.navigate(['/star-ships'])
  }
}
