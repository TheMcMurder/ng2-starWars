import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map';

const API = 'http://localhost:4000';

@Injectable()
export class StarWarsDataService{
  people;
  ships;
  constructor(private _http:Http){
    this.people = _http.get(`${API}/people`)
      .map(res => res.json() //get the response as json
        .map(person =>
          Object.assign(person, {image: `${API}/${person.image}`})
        )
      );
    this.ships = _http.get(`${API}/starships`)
      .map(res => res.json() //get the response as json
        .map(ship =>
          Object.assign(ship, {image: `${API}/${ship.image}`})
        )
      )
  }
}
