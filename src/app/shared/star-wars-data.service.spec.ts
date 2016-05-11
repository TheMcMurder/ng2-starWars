import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { StarWarsDataService } from './star-wars-data.service.ts';

describe('StarWarsData Service', () => {
  beforeEachProviders(() => [StarWarsDataService]);

  it('should ...',
      inject([StarWarsDataService], (service: StarWarsDataService) => {
    expect(service).toBeTruthy();
  }));
});
