import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { StarWarsAppComponent } from '../app/star-wars.component';

beforeEachProviders(() => [StarWarsAppComponent]);

describe('App: StarWars', () => {
  it('should create the app',
      inject([StarWarsAppComponent], (app: StarWarsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'star-wars works!\'',
      inject([StarWarsAppComponent], (app: StarWarsAppComponent) => {
    expect(app.title).toEqual('star-wars works!');
  }));
});
